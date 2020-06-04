import { IScriptScheme } from '../base';
import { s } from '../utils';

import { BrahmicScriptDefinition } from './base';
import { BrahmicScript } from '../../enum';


export const AssameseScheme: IScriptScheme = {
    vowels: ['অ', 'আ', 'ই', 'ঈ', 'উ', 'ঊ', 'ঋ', 'ৠ', 'ঌ', 'ৡ', 'এ', 'ঐ', 'ও', 'ঔ', 'এ', 'ও'],
    marks: ['া', 'ি', 'ী', 'ু', 'ূ', 'ৃ', 'ৄ', 'ৢ', 'ৣ', 'ে', 'ৈ', 'ো', 'ৌ', 'ে', 'ো'],
    virama: s('্'),
    yogavaahas: ['ং', 'ঃ', 'ঁ', 'ᳵ', 'ᳶ', '़'],
    consonants: s(`
        ক খ গ ঘ ঙ
        চ ছ জ ঝ ঞ
        ট ঠ ড ঢ ণ
        ত থ দ ধ ন
        প ফ ব ভ ম
        য ৰ ল ৱ
        শ ষ স হ
        ল় ক্ষ জ্ঞ
        ऩ ৰ় ऴ क़ ख़ ग़ ज़ ड़ ढ़ फ़ य़
    `),
    symbols: s(`
        ওঁ ঽ । ॥
        ০ ১ ২ ৩ ৪ ৫ ৬ ৭ ৮ ৯
    `),
};


export const Assamese = new BrahmicScriptDefinition({
    name: BrahmicScript.ASSAMESE,
    isRoman: false,
    scheme: AssameseScheme,
});
