import { ScriptDefinition, IScriptScheme } from './scripts/base';
import { IStringMap } from './types';

import { replaceGurumukhiTippi } from './scripts/brahmic/Gurumukhi';
import { BrahmicScript } from './enum';


/**
 * maps one script to other.
 */
export class ScriptMap {
    public readonly fromScript: ScriptDefinition;

    public readonly toScript: ScriptDefinition;

    public marks: IStringMap = {};

    public virama: IStringMap = {};

    public vowels: IStringMap = {};

    public consonants: IStringMap = {};

    public nonMarksVirama: IStringMap = {};

    public maxKeyLengthFromScript: number;

    constructor({ fromScript, toScript }: {
        fromScript: ScriptDefinition;
        toScript: ScriptDefinition;
    }) {
        this.fromScript = fromScript;
        this.toScript = toScript;

        this.maxKeyLengthFromScript = this.fromScript.maxKeyLength;

        Object.keys(this.fromScript.scheme).forEach((groupName) => {
            const fromGroup = this.fromScript.scheme[groupName as keyof IScriptScheme];
            const toGroup = this.toScript.scheme[groupName as keyof IScriptScheme];
            if (!toGroup || !toGroup.length) return;

            const conjunctMap: IStringMap = {};
            fromGroup.some((k, i) => {
                if (i >= toGroup.length) return true; // iter complete.
                const v = toGroup[i];
                conjunctMap[k] = v;

                if (Object.prototype.hasOwnProperty.call(fromScript.synonymMap, k)) {
                    fromScript.synonymMap[k].forEach((kSyn) => {
                        conjunctMap[kSyn] = v;
                    });
                }

                if (groupName.endsWith('marks')) {
                    Object.assign(this.marks, conjunctMap);
                } else if (groupName === 'virama') {
                    this.virama = conjunctMap;
                } else {
                    Object.assign(this.nonMarksVirama, conjunctMap);
                    if (groupName.endsWith('consonants')) {
                        Object.assign(this.consonants, conjunctMap);
                    } else if (groupName.endsWith('vowels')) {
                        Object.assign(this.vowels, conjunctMap);
                    }
                }

                return false;
            });
        });
    }
}


function hasProp(obj: Object, key: string) {
    return Object.prototype.hasOwnProperty.call(obj, key);
}


export interface ITransliterationOptions {
    togglers?: Set<string>;
    suspendOn?: Set<string>;
    suspendOff?: Set<string>;
}

export interface ITransliterateArgs extends ITransliterationOptions {
    data: string;
    scriptMap: ScriptMap;
}


// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function transliterateFromBrahmic({ data, scriptMap, ...kwargs }: ITransliterateArgs) {
    if (scriptMap.fromScript.name === BrahmicScript.GURUMUKHI) {
        // eslint-disable-next-line no-param-reassign
        data = replaceGurumukhiTippi(data);
    }

    const { marks, virama, consonants, nonMarksVirama, maxKeyLengthFromScript } = scriptMap;
    const toRoman = scriptMap.toScript.isRoman;

    const buf: string[] = [];
    const push = (v: string) => buf.push(v);
    let i = 0;
    let found = false;
    let toRomanHadConsonant = false;

    while (i <= data.length) {
        /*
            The longest token in the source scheme has length`max_key_length_from_scheme`.Iterate
            over`data` while taking`max_key_length_from_scheme` characters at a time.If we don`t
            find the character group in our scheme map, lop off a character and
            try again.

            If we've finished reading through `data`, then `token` will be empty
            and the loop below will be skipped.
        */

        let token = data.slice(i, i + maxKeyLengthFromScript);

        while (token) {
            if (token.length === 1) {
                if (hasProp(marks, token)) {
                    push(marks[token]);
                    found = true;
                } else if (hasProp(virama, token)) {
                    push(virama[token]);
                    found = true;
                } else {
                    if (toRomanHadConsonant) {
                        push('a');
                    }
                    push(nonMarksVirama[token] || token);
                    found = true;
                }
            } else {
                // eslint-disable-next-line no-lonely-if
                if (hasProp(nonMarksVirama, token)) {
                    if (toRomanHadConsonant) {
                        push('a');
                    }
                    push(nonMarksVirama[token]);
                    found = true;
                }
            }

            if (found) {
                toRomanHadConsonant = toRoman && (hasProp(consonants, token));
                i += token.length;
                break;
            } else {
                token = token.slice(0, token.length - 1);
            }
        }

        /*
            Continuing the outer while loop.
            We've exhausted the token; this must be some other character. Due to
            the implicit 'a', we must explicitly end any lingering consonants
            before we can handle the current token.
        */
        if (!found) {
            if (toRomanHadConsonant) {
                push(virama[Object.keys(virama)[0]]); // NOTE
            }
            if (i < data.length) {
                push(data[i]);
                toRomanHadConsonant = false;
            }
            i += 1;
        }
        found = false;
    }
    if (toRomanHadConsonant) {
        push('a');
    }
    return buf.join('');
}


export function transliterateFromRoman({ data, scriptMap, ...kwargs }: ITransliterateArgs) {
    const { vowels, marks, virama, consonants, nonMarksVirama, maxKeyLengthFromScript } = scriptMap;
    const toRoman = scriptMap.toScript.isRoman;

    const togglers = kwargs.togglers || new Set();
    const suspendOn = kwargs.suspendOn || new Set();
    const suspendOff = kwargs.suspendOff || new Set();

    const buf: string[] = [];
    const push = (v: string) => buf.push(v);

    let i = 0;
    let hadConsonant = false;
    let found = false;

    // If true, don't transliterate. The toggle token is discarded.
    let toggled = false;
    // If true, don't transliterate. The suspend token is retained.
    // `suspended` overrides `toggled`.
    let suspended = false;

    /**
     The longest token in the source scheme has length `max_key_length_from_scheme`. Iterate
    over `data` while taking `max_key_length_from_scheme` characters at a time. If we don`t
    find the character group in our scheme map, lop off a character and
    try again.

    If we've finished reading through `data`, then `token` will be empty
    and the loop below will be skipped.
     */
    while (i <= data.length) {
        let token = data.slice(i, i + maxKeyLengthFromScript);

        while (token) {
            if (togglers.has(token)) {
                toggled = !toggled;
                i += 2; // skip over the token
                found = true; // force the token to fill up again
                break;
            }

            if (suspendOn.has(token)) {
                suspended = true;
            } else if (suspendOff.has(token)) {
                suspended = false;
            }

            if (toggled || suspended) {
                token = token.slice(0, token.length - 1); // NOTE
                // eslint-disable-next-line no-continue
                continue;
            }

            /**
             * Catch the pattern CV, where C is a consonant and V is a vowel.
             * V should be rendered as a vowel mark, a.k.a. a "dependent"
             * vowel. But due to the nature of Brahmic scripts, 'a' is implicit
             * and has no vowel mark. If we see 'a', add nothing.
             */
            if (hadConsonant && hasProp(vowels, token)) {
                const mark = marks[token] || '';
                if (mark) {
                    push(mark);
                } else if (toRoman) {
                    push(vowels[token]);
                }
                found = true;
            // eslint-disable-next-line brace-style
            }

            /**
             * Catch any non_marks_viraama character, including consonants, punctuation,
             * and regular vowels. Due to the implicit 'a', we must explicitly
             * end any lingering consonants before we can handle the current
             * token.
             */
            else if (hasProp(nonMarksVirama, token)) {
                if (hadConsonant) {
                    push(virama['']);
                }
                push(nonMarksVirama[token]);
                found = true;
            }

            if (found) {
                hadConsonant = hasProp(consonants, token);
                i += token.length;
                break;
            } else {
                token = token.slice(0, token.length - 1); // NOTE
            }
        }

        /**
         * We've exhausted the token; this must be some other character. Due to
        * the implicit 'a', we must explicitly end any lingering consonants
        * before we can handle the current token.
         */
        if (!found) {
            if (hadConsonant) {
                push(virama['']);
            }
            if (i < data.length) {
                push(data[i]);
                hadConsonant = false;
            }
            i += 1;
        }
        found = false;
    }
    return buf.join('');
}


export function transliterate({ data, scriptMap, ...kwargs }: ITransliterateArgs) {
    const opts = {
        ...{
            togglers: new Set(['##']),
            suspendOn: new Set(['<']),
            suspendOff: new Set(['>']),
        },
        data,
        scriptMap,
        ...kwargs,
    };

    const func = scriptMap.fromScript.isRoman ? transliterateFromRoman : transliterateFromBrahmic;
    return func(opts);
}
