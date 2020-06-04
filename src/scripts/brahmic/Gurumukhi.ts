import { IScriptScheme } from '../base';
import { s } from '../utils';

import { BrahmicScriptDefinition } from './base';
import { BrahmicScript } from '../../enum';


export const GurumukhiScheme: IScriptScheme = {
    vowels: s('ਅ ਆ ਇ ਈ ਉ ਊ ऋ ॠ ऌ ॡ ਏ ਐ ਓ ਔ'),
    marks: s('ਾ ਿ ੀ ੁ ੂ ृ ॄ ॢ ॣ ੇ ੈ ੋ ੌ'), // Includes some fake mAtrA-s from devanAgarI
    virama: s('੍'),
    yogavaahas: s('ਂ ਃ ਁ ᳵ ᳶ ਼'),
    consonants: s(`
        ਕ ਖ ਗ ਘ ਙ
        ਚ ਛ ਜ ਝ ਞ
        ਟ ਠ ਡ ਢ ਣ
        ਤ ਥ ਦ ਧ ਨ
        ਪ ਫ ਬ ਭ ਮ
        ਯ ਰ ਲ ਵ
        ਸ਼ ਸ਼਼ ਸ ਹ
        ਲ਼ ਕ੍ਸ਼ ਜ੍ਞ
        ਨ਼ ਰ਼ ਲ਼਼ ਕ਼ ਖ਼ ਗ਼ ਜ਼ ੜ ਢ਼ ਫ਼ ਯ਼
    `),
    symbols: s(`
        ੴ ऽ । ॥
        ੦ ੧ ੨ ੩ ੪ ੫ ੬ ੭ ੮ ੯
    `),
};


export const Gurumukhi = new BrahmicScriptDefinition({
    name: BrahmicScript.GURUMUKHI,
    isRoman: false,
    scheme: GurumukhiScheme,
    synonymMap: { 'ਂ': ['ੰ'] },
});


export function replaceGurumukhiTippi(text: string) {
    let output = text;
    const matchReplaceRegexTuples = [
        [/ੱ([ਕਖ])/g, /ਕ੍$1/], [/ੱ([ਗਘ])/g, /ਗ੍$1/], [/ੱ([ਚਛ])/g, /ਚ੍$1/], [/ੱ([ਜਝ])/g, /ਜ੍$1/],
        [/ੱ([ਟਠ])/g, /ਟ੍$1/], [/ੱ([ਡਢ])/g, /ਡ੍$1/], [/ੱ([ਤਥ])/g, /ਤ੍$1/], [/ੱ([ਦਧ])/g, /ਦ੍$1/],
        [/ੱ([ਪਫ])/g, /ਪ੍$1/], [/ੱ([ਬਭ])/g, /ਬ੍$1/],
        [/ੱ([ਯਰਲਵਸ਼ਸਹਙਞਣਨਮਜ਼ੜਫ਼])/g, /$1੍$1/],
    ];
    matchReplaceRegexTuples.forEach(([sv, rv]) => {
        // @ts-ignore
        output = output.replace(sv, rv); // NOTE
    });
    return output;
}
