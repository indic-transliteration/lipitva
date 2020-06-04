import { IScriptScheme } from '../base';
import { s } from '../utils';

import { BrahmicScriptDefinition } from './base';
import { BrahmicScript } from '../../enum';


export const ChamScheme: IScriptScheme = {
    vowels: ['ꨀ', 'ꨀꨩ', 'ꨁ', 'ꨁꨩ', 'ꨂ', 'ꨂꨩ', 'ꨣꨮ', 'ꨣꨮꨩ', 'ꨤꨮ', 'ꨤꨮꨩ', 'ꨃ', 'ꨄ', 'ꨅ', 'ꨀꨯꨱ', 'ꨃ', 'ꨅ'],
    marks: ['ꨩ', 'ꨪ', 'ꨫ', 'ꨭ', 'ꨭꨩ', 'ꨴꨮ', 'ꨴꨮꨩ', 'ꨵꨮ', 'ꨵꨮꨩ', 'ꨯꨮ', 'ꨰ', 'ꨯ', 'ꨯꨱ', 'ꨯꨮ', 'ꨮ'],
    virama: s('ʾ'),
    yogavaahas: ['ꩌ', 'ꩍ', 'ꩃ', 'ᳵ', 'ᳶ', '़'],
    consonants: s(`
        ꨆ ꨇ ꨈ ꨉ ꨋ
        ꨌ ꨍ ꨎ ꨏ ꨑ
        ꨓ ꨔ ꨕ ꨖ ꨘ
        ꨓ ꨔ ꨕ ꨖ ꨘ
        ꨚ ꨜ ꨝ ꨞ ꨠ
        ꨢ ꨣ ꨤ ꨥ
        ꨦ ꨦ ꨧ ꨨ
        ꨤ ꨆʾꨦ ꨎʾꨑ
        ऩ ꨣ ऴ क़ ख़ ग़ ज़ ड़ ढ़ फ़ य़
    `),
    symbols: s(`
        ꨅꩌ ' ꩝ ꩞
        ꩐ ꩑ ꩒ ꩓ ꩔ ꩕ ꩖ ꩗ ꩘ ꩙
    `),
};


export const Cham = new BrahmicScriptDefinition({
    name: BrahmicScript.CHAM,
    isRoman: false,
    scheme: ChamScheme,
});
