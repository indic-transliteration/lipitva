import { IScriptScheme } from '../base';
import { s } from '../utils';

import { BrahmicScriptDefinition } from './base';
import { BrahmicScript } from '../../enum';


export const KhmerScheme: IScriptScheme = {
    vowels: ['អ', 'អា', 'ឥ', 'ឦ', 'ឧ', 'ឩ', 'ឫ', 'ឬ', 'ឭ', 'ឮ', 'ឯ', 'ឰ', 'ឱ', 'ឳ', 'ऎ', 'ऒ'],
    marks: ['ា', 'ិ', 'ី', 'ុ', 'ូ', '្ឫ', '្ឬ', '្ឭ', '្ឮ', 'េ', 'ៃ', 'ោ', 'ៅ', '', ''],
    virama: s('៑'),
    yogavaahas: ['ំ', 'ះ', 'ំ', 'ᳵ', 'ᳶ', '़'],
    consonants: s(`
        ក ខ គ ឃ ង
        ច ឆ ជ ឈ ញ
        ដ ឋ ឌ ឍ ណ
        ត ថ ទ ធ ន
        ប ផ ព ភ ម
        យ រ ល វ
        ឝ ឞ ស ហ
        ឡ ក៑ឞ ជ៑ញ
        ऩ ऱ ऴ क़ ख़ ग़ ज़ ड़ ढ़ फ़ य़
    `),
    symbols: s(`
        ឱំ ៜ । ॥
        ០ ១ ២ ៣ ៤ ៥ ៦ ៧ ៨ ៩
    `),
};


export const Khmer = new BrahmicScriptDefinition({
    name: BrahmicScript.KHMER,
    isRoman: false,
    scheme: KhmerScheme,
});
