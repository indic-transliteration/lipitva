import { IScriptScheme } from '../base';
import { s } from '../utils';

import { BrahmicScriptDefinition } from './base';
import { BrahmicScript } from '../../enum';


export const PhagsPaScheme: IScriptScheme = {
    vowels: ['ꡝ', 'ꡝꡖ', 'ꡞ', 'ꡞꡖ', 'ꡟ', 'ꡟꡖ', 'ꡘꡞ', 'ꡘꡖꡞ', 'ꡙꡞ', 'ꡙꡖꡞ', 'ꡠ', 'ꡠꡖ', 'ꡡ', 'ꡡꡖ', 'ऎ', 'ऒ'],
    marks: ['ꡖ', 'ꡞ', 'ꡖꡞ', 'ꡟ', 'ꡖꡟ', 'ꡱꡞ', 'ꡖꡱꡞ', 'ꡙꡞ', 'ꡙꡖꡞ', 'ꡠ', 'ꡖꡠ', 'ꡡ', 'ꡖꡡ', '', ''],
    virama: s(''),
    yogavaahas: ['ꡳ', 'ꡜ', 'ꡳ', 'ᳵ', 'ᳶ', '़'],
    consonants: s(`
        ꡀ ꡁ ꡂ ꡂꡜ ꡃ
        ꡐ ꡑ ꡒ ꡒꡜ ꡇ
        ꡩ ꡪ ꡫ ꡫꡜ ꡬ
        ꡈ ꡉ ꡊ ꡊꡜ ꡋ
        ꡌ ꡍ ꡎ ꡎꡜ ꡏ
        ꡗ ꡘ ꡙ ꡓ
        ꡚ ꡚ ꡛ ꡜ
        ꡙ ꡀꡚ ꡒꡇ
        ऩ ऱ ऴ क़ ख़ ग़ ज़ ड़ ढ़ फ़ य़
    `),
    symbols: s(`
        ꡳꡡ ऽ । ॥
        0 1 2 3 4 5 6 7 8 9
    `),
};


export const PhagsPa = new BrahmicScriptDefinition({
    name: BrahmicScript.PHAGS_PA,
    isRoman: false,
    scheme: PhagsPaScheme,
});
