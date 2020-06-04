import { IScriptScheme } from '../base';
import { s } from '../utils';

import { BrahmicScriptDefinition } from './base';
import { BrahmicScript } from '../../enum';


export const BengaliScheme: IScriptScheme = {
    vowels: s('অ আ ই ঈ উ ঊ ঋ ৠ ঌ ৡ এ ঐ ও ঔ'),
    marks: s('া ি ী ু ূ ৃ ৄ ৢ ৣ ে ৈ ো ৌ'),
    virama: s('্'),
    yogavaahas: s('ং ঃ ঁ ᳵ ᳶ ়'),
    consonants: s(`
        ক খ গ ঘ ঙ
        চ ছ জ ঝ ঞ
        ট ঠ ড ঢ ণ
        ত থ দ ধ ন
        প ফ ব ভ ম
        য র ল ব
        শ ষ স হ
        ळ ক্ষ জ্ঞ
        ন় র় ষ় ক় খ় গ় জ় ড় ঢ় ফ় য়
    `),
    symbols: s(`
        ॐ ঽ । ॥
        ০ ১ ২ ৩ ৪ ৫ ৬ ৭ ৮ ৯
    `),
};


export const Bengali = new BrahmicScriptDefinition({
    name: BrahmicScript.BENGALI,
    isRoman: false,
    scheme: BengaliScheme,
});
