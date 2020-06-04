import { IScriptScheme } from '../base';
import { s } from '../utils';

import { BrahmicScriptDefinition } from './base';
import { BrahmicScript } from '../../enum';


export const LepchaScheme: IScriptScheme = {
    vowels: ['ᰣ', 'ᰣᰦ', 'ᰣᰧ', 'ᰣᰧᰶ', 'ᰣᰪ', 'ᰣᰫ', 'ᰛᰪ', 'ᰛᰫ', 'ᰜᰪ', 'ᰜᰫ', 'ᰣᰬ', 'ᰣᰬ', 'ᰣᰨ', 'ᰣᰩ', 'ऎ', 'ऒ'],
    marks: ['ᰦ', 'ᰧ', 'ᰧᰶ', 'ᰪ', 'ᰫ', 'ᰥᰪ', 'ᰥᰫ', 'ᰜᰪ', 'ᰜᰫ', 'ᰬ', 'ᰬ', 'ᰨ', 'ᰩ', '', ''],
    virama: s(''),
    yogavaahas: ['ᰴ', 'ᰝ', 'ᰴ', 'ᳵ', 'ᳶ', '़'],
    consonants: s(`
        ᰀ ᰂ ᰃ ᰃ ᰅ
        ᰆ ᰇ ᰈ ᰈ ᰉ
        ᱍ ᱎ ᱏ ᱏ ᰍ
        ᰊ ᰋ ᰌ ᰌ ᰍ
        ᰎ ᰐ ᰓ ᰓ ᰕ
        ᰚ ᰛ ᰜ ᰟ
        ᰡ ᰡ᰷ ᰠ ᰝ
        ᰜ᰷ ᰀᰡ᰷ ᰈᰉ
        ऩ ऱ ऴ क़ ख़ ग़ ज़ ड़ ढ़ फ़ य़
    `),
    symbols: s(`
        ᰣᰨᰵ ' । ॥
        ᱀ ᱁ ᱂ ᱃ ᱄ ᱅ ᱆ ᱇ ᱈ ᱉
    `),
};


export const Lepcha = new BrahmicScriptDefinition({
    name: BrahmicScript.LEPCHA,
    isRoman: false,
    scheme: LepchaScheme,
});
