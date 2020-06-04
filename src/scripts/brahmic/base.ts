import { IStringMap } from '../../types';
import { ScriptDefinition, IScriptDefinition } from '../base';


export class BrahmicScriptDefinition extends ScriptDefinition {
    public readonly vowelToMarkMap: IStringMap;

    constructor(def: IScriptDefinition) {
        super(def);
        this.vowelToMarkMap = {};
        this.scheme.vowels.forEach((vowel, i) => {
            this.vowelToMarkMap[vowel] = i > 0 ? this.scheme.marks[i - 1] : '';
        });
    }

    public doVyanjanaSvaraJoin(vyanjanaanta: string, svaraadi: string) {
        const paraSvara = svaraadi.charAt(0);
        if (!this.scheme.vowels.includes(paraSvara)) {
            throw Error(`${svaraadi} is not valid svaradi`);
        }
        return `${vyanjanaanta.slice(0, vyanjanaanta.length - 1)}${this.vowelToMarkMap[paraSvara]}${svaraadi.slice(1)}`;
    }

    public applyRomanNumerals(input: string) {
        const brahmicNumerals = this.scheme.symbols.slice(4);
        let output = input;
        [...Array(10).keys()].forEach((digit) => {
            output = output.replace(brahmicNumerals[digit], String(digit));
        });
        return output;
    }
}
