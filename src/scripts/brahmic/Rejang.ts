import { IScriptScheme } from '../base';
import { s } from '../utils';

import { BrahmicScriptDefinition } from './base';
import { BrahmicScript } from '../../enum';


export const RejangScheme: IScriptScheme = {
    vowels: ['ꥆ', 'ꥆ', 'ꥆꥇ', 'ꥆꥇ', 'ꥆꥈ', 'ꥆꥈ', 'ꤽꥈ', 'ꤽꥈ', 'ꤾꥈ', 'ꤾꥈ', 'ꥆꥉ', 'ꥆꥊ', 'ꥆꥋ', 'ꥆꥌ', 'ऎ', 'ऒ'],
    marks: ['', 'ꥇ', 'ꥇ', 'ꥈ', 'ꥈ', '꥓ꤽꥈ', '꥓ꤽꥈ', '꥓ꤾꥈ', '꥓ꤾꥈ', 'ꥉ', 'ꥊ', 'ꥋ', 'ꥌ', '', ''],
    virama: s('꥓'),
    yogavaahas: ['ꥏ', 'ꥒ', 'ꥏ', 'ᳵ', 'ᳶ', '़'],
    consonants: s(`
        ꤰ ꤰ ꤱ ꤱ ꤲ
        ꤹ ꤹ ꤺ ꤺ ꤻ
        ꤳ ꤳ ꤴ ꤴ ꤵ
        ꤳ ꤳ ꤴ ꤴ ꤵ
        ꤶ ꤶ ꤷ ꤷ ꤸ
        ꤿ ꤽ ꤾ ꥀ
        ꤼ ꤼ ꤼ ꥁ
        ꤾ ꤰ꥓ꤼ ꤺ꥓ꤻ
        ऩ ऱ ऴ क़ ख़ ग़ ज़ ड़ ढ़ फ़ य़
    `),
    symbols: s(`
        ꥆꥋꥏ ' । ॥
        0 1 2 3 4 5 6 7 8 9
    `),
};


export const Rejang = new BrahmicScriptDefinition({
    name: BrahmicScript.REJANG,
    isRoman: false,
    scheme: RejangScheme,
});
