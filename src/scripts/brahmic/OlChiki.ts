import { IScriptScheme } from '../base';
import { s } from '../utils';

import { BrahmicScriptDefinition } from './base';
import { BrahmicScript } from '../../enum';


export const OlChikiScheme: IScriptScheme = {
    vowels: ['ᱚ', 'ᱟ', 'ᱤ', 'ᱤᱻ', 'ᱩ', 'ᱩᱻ', 'ᱨᱩ', 'ᱨᱩᱻ', 'ᱞᱩ', 'ᱞᱩᱻ', 'ᱮ', 'ᱚᱤ', 'ᱳ', 'ᱚᱩ', 'ᱮᱹ', 'ᱳ'],
    marks: ['ᱟ', 'ᱤ', 'ᱤᱻ', 'ᱩ', 'ᱩᱻ', 'ᱨᱩ', 'ᱨᱩᱻ', 'ᱞᱩ', 'ᱞᱩᱻ', 'ᱮ', 'ᱚᱤ', 'ᱳ', 'ᱚᱩ', 'ᱮᱹ', 'ᱳ'],
    virama: s(''),
    yogavaahas: ['ᱝ', 'ᱷ', 'ᱸ', 'ᳵ', 'ᳶ', '़'],
    consonants: s(`
        ᱠᱚ ᱠᱷᱚ ᱜᱚ ᱜᱷᱚ ᱶᱚ
        ᱪᱚ ᱪᱷᱚ ᱡᱚ ᱡᱷᱚ ᱧᱚ
        ᱴᱚ ᱴᱷᱚ ᱰᱚ ᱰᱷᱚ ᱬᱚ
        ᱛᱚ ᱛᱷᱚ ᱫᱚ ᱫᱷᱚ ᱱᱚ
        ᱯᱚ ᱯᱷᱚ ᱵᱚ ᱵᱷᱚ ᱢᱚ
        ᱭᱚ ᱨᱚ ᱞᱚ ᱣᱚ
        ᱥᱚ ᱥᱚ ᱥᱚ ᱦᱚ
        ᱞᱚ ᱠᱚᱥᱚ ᱡᱚᱧᱚ
        ऩ ᱨᱚ ऴ क़ ख़ ग़ ज़ ड़ ढ़ फ़ य़
    `),
    symbols: s(`
        ᱳᱸ ' ᱾ ᱿
        ᱐ ᱑ ᱒ ᱓ ᱔ ᱕ ᱖ ᱗ ᱘ ᱙
    `),
};


export const OlChiki = new BrahmicScriptDefinition({
    name: BrahmicScript.OL_CHIKI,
    isRoman: false,
    scheme: OlChikiScheme,
});
