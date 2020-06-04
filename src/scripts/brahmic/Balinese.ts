import { IScriptScheme } from '../base';
import { s } from '../utils';

import { BrahmicScriptDefinition } from './base';
import { BrahmicScript } from '../../enum';


export const BalineseScheme: IScriptScheme = {
    vowels: ['ᬅ', 'ᬆ', 'ᬇ', 'ᬈ', 'ᬉ', 'ᬊ', 'ᬋ', 'ᬌ', 'ᬍ', 'ᬎ', 'ᬏ', 'ᬐ', 'ᬑ', 'ᬒ', 'ᬏ', 'ᬑ'],
    marks: ['ᬵ', 'ᬶ', 'ᬷ', 'ᬸ', 'ᬹ', 'ᬺ', 'ᬻ', 'ᬼ', 'ᬽ', 'ᬾ', 'ᬿ', 'ᭀ', 'ᭁ', 'ᬾ', 'ᭀ'],
    virama: s('᭄'),
    yogavaahas: ['ᬂ', 'ᬄ', 'ᬁ', 'ᳵ', 'ᳶ', '़'],
    consonants: s(`
        ᬓ ᬔ ᬕ ᬖ ᬗ
        ᬘ ᬙ ᬚ ᬛ ᬜ
        ᬝ ᬞ ᬟ ᬠ ᬡ
        ᬢ ᬣ ᬤ ᬥ ᬦ
        ᬧ ᬨ ᬩ ᬪ ᬫ
        ᬬ ᬭ ᬮ ᬯ
        ᬰ ᬱ ᬲ ᬳ
        ᬮ᬴ ᬓ᭄ᬱ ᬚ᭄ᬜ
        ऩ ᬭ᬴ ऴ क़ ख़ ग़ ज़ ड़ ढ़ फ़ य़
    `),
    symbols: s(`
        ᬑᬁ ' ᭞ ᭟
        ᭐ ᭑ ᭒ ᭓ ᭔ ᭕ ᭖ ᭗ ᭘ ᭙
    `),
};


export const Balinese = new BrahmicScriptDefinition({
    name: BrahmicScript.BALINESE,
    isRoman: false,
    scheme: BalineseScheme,
});
