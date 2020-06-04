import { IScriptScheme } from '../base';
import { s } from '../utils';

import { BrahmicScriptDefinition } from './base';
import { BrahmicScript } from '../../enum';


export const ShanScheme: IScriptScheme = {
    vowels: ['အ', 'အႃ', 'အိ', 'အီ', 'အု', 'အူ', 'အၖ', 'အၗ', 'အၘ', 'အၙ', 'အေ', 'အႆ', 'အေႃ', 'အဝ်', 'အေ', 'အေႃ'],
    marks: ['ႃ', 'ိ', 'ီ', 'ု', 'ူ', 'ၖ', 'ၗ', 'ၘ', 'ၙ', 'ေ', 'ႆ', 'ေႃ', 'ဝ်', 'ေ', 'ေႃ'],
    virama: s('်'),
    yogavaahas: ['ံ', 'း', 'ံ', 'ᳵ', 'ᳶ', '़'],
    consonants: s(`
        ၵ ၶ ၷ ꧠ င
        ၸ ꧡ ꩡ ꧢ ၺ
        ꩦ ꩧ ꩨ ꩩ ꧣ
        တ ထ ၻ ꩪ ၼ
        ပ ၽ ၿ ꧤ မ
        ယ ရ လ ဝ
        ၐ ၑ သ ႁ
        ꩮ ၵ်ၑ ꩡ်ၺ
        ऩ ရ ऴ क़ ख़ ग़ ज़ ड़ ढ़ फ़ य़
    `),
    symbols: s(`
        အေႃံ ' ၊ ။
        ႐ ႑ ႒ ႓ ႔ ႕ ႖ ႗ ႘ ႙
    `),
};


export const Shan = new BrahmicScriptDefinition({
    name: BrahmicScript.SHAN,
    isRoman: false,
    scheme: ShanScheme,
});
