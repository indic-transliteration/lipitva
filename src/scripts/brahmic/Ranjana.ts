import { IScriptScheme } from '../base';
import { s } from '../utils';

import { BrahmicScriptDefinition } from './base';
import { BrahmicScript } from '../../enum';


export const RanjanaScheme: IScriptScheme = {
    vowels: ['अ', 'आ', 'इ', 'ई', 'उ', 'ऊ', 'ऋ', 'ॠ', 'ऌ', 'ॡ', 'ए', 'ऐ', 'ओ', 'औ', 'ऎ', 'ऒ'],
    marks: ['ा', 'ि', 'ी', 'ु', 'ू', 'ृ', 'ॄ', 'ॢ', 'ॣ', 'े', 'ै', 'ो', 'ौ', '', ''],
    virama: s('्'),
    yogavaahas: ['ं', 'ः', 'ँ', 'ᳵ', 'ᳶ', '़'],
    consonants: s(`
        क ख ग घ ङ
        च छ ज झ ञ
        ट ठ ड ढ ण
        त थ द ध न
        प फ ब भ म
        य र ल व
        श ष स ह
        ल क्ष ज्ञ
        ऩ ऱ ऴ क़ ख़ ग़ ज़ ड़ ढ़ फ़ य़
    `),
    symbols: s(`
        ॐ ऽ । ॥
        ० १ २ ३ ४ ५ ६ ७ ८ ९
    `),
};


export const Ranjana = new BrahmicScriptDefinition({
    name: BrahmicScript.RANJANA,
    isRoman: false,
    scheme: RanjanaScheme,
});
