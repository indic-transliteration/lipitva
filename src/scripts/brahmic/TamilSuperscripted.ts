import { IScriptScheme } from '../base';
import { s } from '../utils';

import { BrahmicScriptDefinition } from './base';
import { BrahmicScript } from '../../enum';


export const TamilSuperscriptedScheme: IScriptScheme = {
    vowels: ['அ', 'ஆ', 'இ', 'ஈ', 'உ', 'ஊ', 'ருʼ', 'ரூʼ', 'லுʼ', 'லூʼ', 'ஏ', 'ஐ', 'ஓ', 'ஔ', 'எ', 'ஒ'],
    marks: ['ா', 'ி', 'ீ', 'ு', 'ூ', '்ருʼ', '்ரூʼ', '்லுʼ', '்லூʼ', 'ே', 'ை', 'ோ', 'ௌ', 'ெ', 'ொ'],
    virama: s('்'),
    yogavaahas: ['ம்ʼ', '꞉', 'ம்ˮ', 'ᳵ', 'ᳶ', '़'],
    consonants: s(`
        க க² க³ க⁴ ங
        ச ச² ஜ ஜ² ஞ
        ட ட² ட³ ட⁴ ண
        த த² த³ த⁴ ந
        ப ப² ப³ ப⁴ ம
        ய ர ல வ
        ஶ ஷ ஸ ஹ
        ள க்ஷ ஜ்ஞ
        ऩ ற ऴ क़ ख़ ग़ ज़ ड़ ढ़ फ़ य़
    `),
    symbols: s(`
        ௐ (அ) . ..
        0 1 2 3 4 5 6 7 8 9
    `),
};


export const TamilSuperscripted = new BrahmicScriptDefinition({
    name: BrahmicScript.TAMIL_SUPERSCRIPTED,
    isRoman: false,
    scheme: TamilSuperscriptedScheme,
});
