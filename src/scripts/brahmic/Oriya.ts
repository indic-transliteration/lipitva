import { IScriptScheme } from '../base';
import { s } from '../utils';

import { BrahmicScriptDefinition } from './base';
import { BrahmicScript } from '../../enum';


export const OriyaScheme: IScriptScheme = {
    vowels: s('ଅ ଆ ଇ ଈ ଉ ଊ ଋ ୠ ଌ ୡ ଏ ଐ ଓ ଔ'),
    marks: ['ା', 'ି', 'ୀ', 'ୁ', 'ୂ', 'ୃ', 'ୄ', '', '', 'େ', 'ୈ', 'ୋ', 'ୌ'],
    virama: s('୍'),
    yogavaahas: s('ଂ ଃ ଁ ᳵ ᳶ ଼'),
    consonants: s(`
        କ ଖ ଗ ଘ ଙ
        ଚ ଛ ଜ ଝ ଞ
        ଟ ଠ ଡ ଢ ଣ
        ତ ଥ ଦ ଧ ନ
        ପ ଫ ବ ଭ ମ
        ଯ ର ଲ ଵ
        ଶ ଷ ସ ହ
        ଳ କ୍ଷ ଜ୍ଞ
        ନ଼ ର଼ ଳ଼ କ଼ ଖ଼ ଗ଼ ଜ଼ ଡ଼ ଢ଼ ଫ଼ ୟ
    `),
    symbols: s(`
        ଓଂ ଽ । ॥
        ୦ ୧ ୨ ୩ ୪ ୫ ୬ ୭ ୮ ୯
    `),
};


export const Oriya = new BrahmicScriptDefinition({
    name: BrahmicScript.ORIYA,
    isRoman: false,
    scheme: OriyaScheme,
});
