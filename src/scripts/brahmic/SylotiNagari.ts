import { IScriptScheme } from '../base';
import { s } from '../utils';

import { BrahmicScriptDefinition } from './base';
import { BrahmicScript } from '../../enum';


export const SylotiNagariScheme: IScriptScheme = {
    vowels: ['ꠅ', 'ꠀ', 'ꠁ', 'ꠁ', 'ꠃ', 'ꠃ', 'ꠞꠤ', 'ꠞꠤ', 'ꠟꠤ', 'ꠟꠤ', 'ꠄ', 'ꠅꠂ', 'ꠅ', 'ꠅꠃ', 'ꠄ', 'ꠅ'],
    marks: ['ꠣ', 'ꠤ', 'ꠤ', 'ꠥ', 'ꠥ', '꠆ꠞꠤ', '꠆ꠞꠤ', '꠆ꠟꠤ', '꠆ꠟꠤ', 'ꠦ', 'ꠂ', 'ꠧ', 'ꠃ', 'ꠦ', 'ꠧ'],
    virama: s('꠆'),
    yogavaahas: ['ꠋ', 'ꠢ꠆', 'ꠋ', 'ᳵ', 'ᳶ', '़'],
    consonants: s(`
        ꠇ ꠈ ꠉ ꠊ ꠘ
        ꠌ ꠍ ꠎ ꠏ ꠘ
        ꠐ ꠑ ꠒ ꠓ ꠘ
        ꠔ ꠕ ꠖ ꠗ ꠘ
        ꠙ ꠚ ꠛ ꠜ ꠝ
        ꠎ ꠞ ꠟ ꠛ
        ꠡ ꠡ ꠡ ꠢ
        ꠟ ꠇ꠆ꠡ ꠎ꠆ꠘ
        ऩ ꠞ ऴ क़ ख़ ग़ ज़ ड़ ढ़ फ़ य़
    `),
    symbols: s(`
        ꠅꠋ ঽ । ॥
        ০ ১ ২ ৩ ৪ ৫ ৬ ৭ ৮ ৯
    `),
};


export const SylotiNagari = new BrahmicScriptDefinition({
    name: BrahmicScript.SYLOTI_NAGARI,
    isRoman: false,
    scheme: SylotiNagariScheme,
});
