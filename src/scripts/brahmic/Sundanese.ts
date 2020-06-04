import { IScriptScheme } from '../base';
import { s } from '../utils';

import { BrahmicScriptDefinition } from './base';
import { BrahmicScript } from '../../enum';


export const SundaneseScheme: IScriptScheme = {
    vowels: ['ᮃ', 'ᮃ', 'ᮄ', 'ᮄ', 'ᮅ', 'ᮅ', 'ᮛᮩ', 'ᮛᮩ', 'ᮜᮩ', 'ᮜᮩ', 'ᮈ', 'ᮃᮄ', 'ᮇ', 'ᮃᮅ', 'ᮈ', 'ᮇ'],
    marks: ['', 'ᮤ', 'ᮤ', 'ᮥ', 'ᮥ', 'ᮢᮩ', 'ᮢᮩ', 'ᮣᮩ', 'ᮣᮩ', 'ᮨ', 'ᮄ', 'ᮧ', 'ᮅ', 'ᮨ', 'ᮧ'],
    virama: s('᮪'),
    yogavaahas: ['ᮀ', 'ᮂ', 'ᮀ', 'ᳵ', 'ᳶ', '़'],
    consonants: s(`
        ᮊ ᮊ ᮌ ᮌ ᮍ
        ᮎ ᮎ ᮏ ᮏ ᮑ
        ᮒ ᮒ ᮓ ᮓ ᮔ
        ᮒ ᮒ ᮓ ᮓ ᮔ
        ᮕ ᮕ ᮘ ᮘ ᮙ
        ᮚ ᮛ ᮜ ᮝ
        ᮯ ᮯ ᮞ ᮠ
        ᮜ ᮊ᮪ᮯ ᮏ᮪ᮑ
        ऩ ᮛ ऴ क़ ख़ ग़ ज़ ड़ ढ़ फ़ य़
    `),
    symbols: s(`
        ᮇᮀ ᮺ . ..
        ᮰ ᮱ ᮲ ᮳ ᮴ ᮵ ᮶ ᮷ ᮸ ᮹
    `),
};


export const Sundanese = new BrahmicScriptDefinition({
    name: BrahmicScript.SUNDANESE,
    isRoman: false,
    scheme: SundaneseScheme,
});
