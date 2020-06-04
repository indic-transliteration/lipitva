import { IScriptScheme } from '../base';
import { s } from '../utils';

import { BrahmicScriptDefinition } from './base';
import { BrahmicScript } from '../../enum';


export const VattelutuScheme: IScriptScheme = {
    vowels: ['அ', 'ஆ', 'இ', 'ஈ', 'உ', 'ஊ', 'ரு', 'ரூ', 'லு', 'லூ', 'ஏ', 'ஐ', 'ஓ', 'ஔ', 'எ', 'ஒ'],
    marks: ['ா', 'ி', 'ீ', 'ு', 'ூ', '்ரு', '்ரூ', '்லு', '்லூ', 'ே', 'ை', 'ோ', 'ௌ', 'ெ', 'ொ'],
    virama: s('்'),
    yogavaahas: ['ம்', '꞉', 'ம்', 'ᳵ', 'ᳶ', '़'],
    consonants: s(`
        க க க க ங
        ச ச ச ச ஞ
        ட ட ட ட ண
        த த த த ந
        ப ப ப ப ம
        ய ர ல வ
        ச ச ச க
        ள க்ச ச்ஞ
        ऩ ற ऴ क़ ख़ ग़ ज़ ड़ ढ़ फ़ य़
    `),
    symbols: s(`
        ஓம் ऽ . ..
        0 1 2 3 4 5 6 7 8 9
    `),
};


export const Vattelutu = new BrahmicScriptDefinition({
    name: BrahmicScript.VATTELUTU,
    isRoman: false,
    scheme: VattelutuScheme,
});
