import { IScriptScheme } from '../base';
import { s } from '../utils';

import { BrahmicScriptDefinition } from './base';
import { BrahmicScript } from '../../enum';


export const BurmeseScheme: IScriptScheme = {
    vowels: ['အ', 'အာ', 'ဣ', 'ဤ', 'ဥ', 'ဦ', 'ၒ', 'ၓ', 'ၔ', 'ၕ', 'ဧ', 'အဲ', 'ဩ', 'ဪ', 'ဧ', 'ဩ'],
    marks: ['ာ', 'ိ', 'ီ', 'ု', 'ူ', 'ၖ', 'ၗ', 'ၘ', 'ၙ', 'ေ', 'ဲ', 'ော', 'ော်', 'ေ', 'ော'],
    virama: s('်'),
    yogavaahas: ['ံ', 'း', 'ံ', 'ᳵ', 'ᳶ', '़'],
    consonants: s(`
        က ခ ဂ ဃ င
        စ ဆ ဇ ဈ ဉ
        ဋ ဌ ဍ ဎ ဏ
        တ ထ ဒ ဓ န
        ပ ဖ ဗ ဘ မ
        ယ ရ လ ဝ
        ၐ ၑ သ ဟ
        ဠ က်ၑ ဇ်ဉ
        ऩ ရ ऴ क़ ख़ ग़ ज़ ड़ ढ़ फ़ य़
    `),
    symbols: s(`
        ဩံ ' ၊ ။
        ၀ ၁ ၂ ၃ ၄ ၅ ၆ ၇ ၈ ၉
    `),
};


export const Burmese = new BrahmicScriptDefinition({
    name: BrahmicScript.BURMESE,
    isRoman: false,
    scheme: BurmeseScheme,
});
