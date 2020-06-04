import { IScriptScheme } from '../base';
import { s } from '../utils';

import { BrahmicScriptDefinition } from './base';
import { BrahmicScript } from '../../enum';


export const AvestanScheme: IScriptScheme = {
    vowels: ['𐬀', '𐬁', '𐬌', '𐬍', '𐬎', '𐬏', '𐬆𐬭𐬆', '𐬇𐬭𐬇', '𐬆𐬮𐬆', '𐬇𐬮𐬇', '𐬉', '𐬀𐬌', '𐬋', '𐬀𐬎', '𐬈', '𐬊'],
    marks: ['𐬁', '𐬌', '𐬍', '𐬎', '𐬏', '𐬆𐬭𐬆', '𐬇𐬭𐬇', '𐬆𐬮𐬆', '𐬇𐬮𐬇', '𐬉', '𐬀𐬌', '𐬋', '𐬀𐬎', '𐬈', '𐬊'],
    virama: s(''),
    yogavaahas: ['𐬩', '𐬵', '𐬩', 'ᳵ', 'ᳶ', '़'],
    consonants: s(`
        𐬐𐬀 𐬑𐬀 𐬔𐬀 𐬖𐬀 𐬢𐬀
        𐬗𐬀 𐬗𐬀 𐬘𐬀 𐬘𐬀 𐬦𐬀
        𐬙𐬀 𐬚𐬀 𐬛𐬀 𐬛𐬀 𐬧𐬀
        𐬙𐬀 𐬚𐬀 𐬛𐬀 𐬜𐬀 𐬥𐬀
        𐬞𐬀 𐬞𐬀 𐬠𐬀 𐬠𐬀 𐬨𐬀
        𐬫𐬀 𐬭𐬀 𐬮𐬀 𐬬𐬀
        𐬱𐬀 𐬴𐬀 𐬯𐬀 𐬵𐬀
        𐬮𐬀 𐬐𐬀𐬴𐬀 𐬘𐬀𐬦𐬀
        ऩ 𐬭𐬀 ऴ क़ ख़ ग़ ज़ ड़ ढ़ फ़ य़
    `),
    symbols: s(`
        𐬋𐬨 ऽ 𐬼‏ 𐬽‏
        0 1 2 3 4 5 6 7 8 9
    `),
};


export const Avestan = new BrahmicScriptDefinition({
    name: BrahmicScript.AVESTAN,
    isRoman: false,
    scheme: AvestanScheme,
});
