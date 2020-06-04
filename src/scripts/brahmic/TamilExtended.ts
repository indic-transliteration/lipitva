import { IScriptScheme } from '../base';
import { s } from '../utils';

import { BrahmicScriptDefinition } from './base';
import { BrahmicScript } from '../../enum';


export const TamilExtendedScheme: IScriptScheme = {
    vowels: ['அ', 'ஆ', 'இ', 'ஈ', 'உ', 'ஊ', '𑌋', '𑍠', '𑌌', '𑍡', 'ஏ', 'ஐ', 'ஓ', 'ஔ', 'எ', 'ஒ'],
    marks: ['ா', 'ி', 'ீ', 'ு', 'ூ', '𑍃', '𑍄', '𑍢', '𑍣', 'ே', 'ை', 'ோ', 'ௌ', 'ெ', 'ொ'],
    virama: s('்'),
    yogavaahas: ['𑌂', '𑌃', '𑌁', 'ᳵ', 'ᳶ', '़'],
    consonants: s(`
        க 𑌖 𑌗 𑌘 ங
        ச 𑌛 ஜ 𑌝 ஞ
        ட 𑌠 𑌡 𑌢 ண
        த 𑌥 𑌦 𑌧 ந
        ப 𑌫 𑌬 𑌭 ம
        ய ர ல வ
        ஶ ஷ ஸ ஹ
        ள க்ஷ ஜ்ஞ
        ऩ ற ऴ क़ ख़ ग़ ज़ ड़ ढ़ फ़ य़
    `),
    symbols: s(`
        ௐ 𑌽 । ॥
        ௦ ௧ ௨ ௩ ௪ ௫ ௬ ௭ ௮ ௯
    `),
};


export const TamilExtended = new BrahmicScriptDefinition({
    name: BrahmicScript.TAMIL_EXTENDED,
    isRoman: false,
    scheme: TamilExtendedScheme,
});
