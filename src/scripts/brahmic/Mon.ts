import { IScriptScheme } from '../base';
import { s } from '../utils';

import { BrahmicScriptDefinition } from './base';
import { BrahmicScript } from '../../enum';


export const MonScheme: IScriptScheme = {
    vowels: ['အ', 'အာ', 'ဣ', 'ဣဳ', 'ဥ', 'ဥူ', 'ၒ', 'ၓ', 'ၔ', 'ၕ', 'ဨ', 'အဲ', 'ဩ', 'ဪ', 'ऎ', 'ऒ'],
    marks: ['ာ', 'ိ', 'ဳ', 'ု', 'ူ', 'ၖ', 'ၗ', 'ၘ', 'ၙ', 'ေ', 'ဲ', 'ော', 'ော်', '', ''],
    virama: s('်'),
    yogavaahas: ['ံ', 'း', 'ံ', 'ᳵ', 'ᳶ', '़'],
    consonants: s(`
        က ခ ဂ ဃ ၚ
        စ ဆ ဇ ၛ ည
        ဋ ဌ ဍ ဎ ဏ
        တ ထ ဒ ဓ န
        ပ ဖ ဗ ဘ မ
        ယ ရ လ ဝ
        ၐ ၑ သ ဟ
        ဠ က်ၑ ဇ်ည
        ऩ ऱ ऴ क़ ख़ ग़ ज़ ड़ ढ़ फ़ य़
    `),
    symbols: s(`
        ဩံ ' । ॥
        ၀ ၁ ၂ ၃ ၄ ၅ ၆ ၇ ၈ ၉
    `),
};


export const Mon = new BrahmicScriptDefinition({
    name: BrahmicScript.MON,
    isRoman: false,
    scheme: MonScheme,
});
