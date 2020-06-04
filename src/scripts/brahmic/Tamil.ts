import { IScriptScheme } from '../base';
import { s } from '../utils';

import { BrahmicScriptDefinition } from './base';
import { BrahmicScript } from '../../enum';


export const TamilScheme: IScriptScheme = {
    vowels: s('அ ஆ இ ஈ உ ஊ ரு ரூ லு லூ ஏ ஐ ஓ ஔ எ ஒ'),
    marks: s('ா ி ீ ு ூ ்ரு ்ரூ ்லு ்லூ ே ை ோ ௌ ெ ொ'),
    virama: s('்'),
    yogavaahas: s('ம் ஃ ँ'),
    consonants: s(`
        க க க க ங
        ச ச ஜ ச ஞ
        ட ட ட ட ண
        த த த த ந
        ப ப ப ப ம
        ய ர ல வ
        ஶ ஷ ஸ ஹ
        ள க்ஷ ஜ்ஞ
        ன ற ழ
    `),
    symbols: s(`
        ௐ ऽ । ॥
        ௦ ௧ ௨ ௩ ௪ ௫ ௬ ௭ ௮ ௯
    `),
};


export const Tamil = new BrahmicScriptDefinition({
    name: BrahmicScript.TAMIL,
    isRoman: false,
    scheme: TamilScheme,
});
