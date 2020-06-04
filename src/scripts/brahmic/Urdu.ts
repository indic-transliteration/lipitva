import { IScriptScheme } from '../base';
import { s } from '../utils';

import { BrahmicScriptDefinition } from './base';
import { BrahmicScript } from '../../enum';


export const UrduScheme: IScriptScheme = {
    vowels: ['اَ', 'آ', 'اِ', 'اِی', 'اُ', 'اُو', 'رِ', 'رِی', 'لِ', 'لِی', 'اے', 'اَے', 'او', 'اَو', 'اے', 'او'],
    marks: ['ا', 'ِ', 'ِی', 'ُ', 'ُو', 'ْرِ', 'ْرِی', 'ْلِ', 'ْلِی', 'ے', 'ے', 'و', 'و', 'ے', 'و'],
    virama: s('ْ'),
    yogavaahas: ['ں', 'ہ', 'ں', 'ᳵ', 'ᳶ', '़'],
    consonants: s(`
        کَ کھَ گَ گھَ نَ
        چَ چھَ جَ جھَ نَ
        ٹَ ٹھَ ڈَ ڈھَ نَ
        تَ تھَ دَ دھَ نَ
        پَ پھَ بَ بھَ مَ
        یَ رَ لَ وَ
        شَ شَ سَ ہَ
        لَ کَْشَ جَْنَ
        ऩ رَ ऴ क़ ख़ ग़ ज़ ड़ ढ़ फ़ य़
    `),
    symbols: s(`
        اومْ ऽ ۔ ۔۔
        ۰ ۱ ۲ ۳ ۴ ۵ ۶ ۷ ۸ ۹
    `),
};


export const Urdu = new BrahmicScriptDefinition({
    name: BrahmicScript.URDU,
    isRoman: false,
    scheme: UrduScheme,
});
