import { IScriptScheme } from '../base';
import { s } from '../utils';

import { BrahmicScriptDefinition } from './base';
import { BrahmicScript } from '../../enum';


export const TaiLaingScheme: IScriptScheme = {
    vowels: ['အ', 'အႃ', 'အိ', 'အီ', 'အု', 'အူ', 'ꩺိ', 'ꩺီ', 'လိ', 'လီ', 'အေ', 'အႆ', 'အေႃ', 'အဝ်', 'အေ', 'အေႃ'],
    marks: ['ႃ', 'ိ', 'ီ', 'ု', 'ူ', 'ြိ', 'ြီ', '်လိ', '်လီ', 'ေ', 'ႆ', 'ေႃ', 'ဝ်', 'ေ', 'ေႃ'],
    virama: s('်'),
    yogavaahas: ['ံ', 'း', 'ံ', 'ᳵ', 'ᳶ', '़'],
    consonants: s(`
        က ၵ ꧩ ꧪ င
        ၸ ꩬ ꧫ ꧬ ꧧ
        ꩦ ꩧ ꧭ ꧮ ꧯ
        တ ထ ꧻ ꧼ ꩫ
        ပ ꧤ ꧽ ꧾ မ
        ယ ꩺ လ ဝ
        ꧬ ꧬ ꧬ ၯ
        ꧺ က်ꧬ ꧫ်ꧧ
        ऩ ꩺ ऴ क़ ख़ ग़ ज़ ड़ ढ़ फ़ य़
    `),
    symbols: s(`
        အေႃံ ' ၊ ။
        ꧰ ꧱ ꧲ ꧳ ꧴ ꧵ ꧶ ꧷ ꧸ ꧹
    `),
};


export const TaiLaing = new BrahmicScriptDefinition({
    name: BrahmicScript.TAI_LAING,
    isRoman: false,
    scheme: TaiLaingScheme,
});
