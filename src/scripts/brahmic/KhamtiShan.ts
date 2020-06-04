import { IScriptScheme } from '../base';
import { s } from '../utils';

import { BrahmicScriptDefinition } from './base';
import { BrahmicScript } from '../../enum';


export const KhamtiShanScheme: IScriptScheme = {
    vowels: ['အ', 'အႃ', 'အိ', 'အီ', 'အု', 'အူ', 'ရိ', 'ရီ', 'လိ', 'လီ', 'အေ', 'အႆ', 'အူဝ်', 'အဝ်', 'ऎ', 'ऒ'],
    marks: ['ႃ', 'ိ', 'ီ', 'ု', 'ူ', '်ရိ', '်ရီ', '်လိ', '်လီ', 'ေ', 'ႆ', 'ူဝ်', 'ဝ်', '', ''],
    virama: s('်'),
    yogavaahas: ['ံ', 'း', 'ံ', 'ᳵ', 'ᳶ', '़'],
    consonants: s(`
        က ၵ ꩠ ၷ င
        ꩡ ꩢ ꩣ ꩤ ꩥ
        ꩦ ꩧ ꩨ ꩩ ꧣ
        တ ထ ၻ ꩪ ꩫ
        ပ ၸ ၿ ၹ မ
        ယ ꩳ လ ဝ
        ꩬ ꩬ ꩬ ꩭ
        ꩮ က်ꩬ ꩣ်ꩥ
        ऩ ऱ ऴ क़ ख़ ग़ ज़ ड़ ढ़ फ़ य़
    `),
    symbols: s(`
        အေႃံ ' । ॥
        ႐ ႑ ႒ ႓ ႔ ႕ ႖ ႗ ႘ ႙
    `),
};


export const KhamtiShan = new BrahmicScriptDefinition({
    name: BrahmicScript.KHAMTI_SHAN,
    isRoman: false,
    scheme: KhamtiShanScheme,
});
