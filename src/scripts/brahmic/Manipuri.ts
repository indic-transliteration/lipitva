import { IScriptScheme } from '../base';
import { s } from '../utils';

import { BrahmicScriptDefinition } from './base';
import { BrahmicScript } from '../../enum';


export const ManipuriScheme: IScriptScheme = {
    vowels: ['ꯑ', 'ꯑꯥ', 'ꯏ', 'ꯏ', 'ꯎ', 'ꯎ', 'ꯔꯨ', 'ꯔꯨ', 'ꯂꯨ', 'ꯂꯨ', 'ꯑꯦ', 'ꯑꯩ', 'ꯑꯣ', 'ꯑꯧ', 'ऎ', 'ऒ'],
    marks: ['ꯥ', 'ꯤ', 'ꯤ', 'ꯨ', 'ꯨ', '꯭ꯔꯨ', '꯭ꯔꯨ', '꯭ꯂꯨ', '꯭ꯂꯨ', 'ꯦ', 'ꯩ', 'ꯣ', 'ꯧ', '', ''],
    virama: s('꯭'),
    yogavaahas: ['ꯪ', 'ꯍ꯭', 'ꯪ', 'ᳵ', 'ᳶ', '़'],
    consonants: s(`
        ꯀ ꯈ ꯒ ꯘ ꯉ
        ꯆ ꯆ ꯖ ꯓ ꯅ
        ꯇ ꯊ ꯗ ꯙ ꯅ
        ꯇ ꯊ ꯗ ꯙ ꯅ
        ꯄ ꯐ ꯕ ꯚ ꯃ
        ꯌ ꯔ ꯂ ꯋ
        ꯁ ꯁ ꯁ ꯍ
        ꯂ ꯀ꯭ꯁ ꯖ꯭ꯅ
        ऩ ऱ ऴ क़ ख़ ग़ ज़ ड़ ढ़ फ़ य़
    `),
    symbols: s(`
        ꯑꯣꯪ ' । ॥
        ꯰ ꯱ ꯲ ꯳ ꯴ ꯵ ꯶ ꯷ ꯸ ꯹
    `),
};


export const Manipuri = new BrahmicScriptDefinition({
    name: BrahmicScript.MANIPURI,
    isRoman: false,
    scheme: ManipuriScheme,
});
