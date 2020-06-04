import { IScriptScheme } from '../base';
import { s } from '../utils';

import { BrahmicScriptDefinition } from './base';
import { BrahmicScript } from '../../enum';


export const GranthaPandyaScheme: IScriptScheme = {
    vowels: ['അ', 'ആ', 'ഇ', 'ഈ', 'ഉ', 'ഊ', 'ഋ', 'ൠ', 'ഌ', 'ൡ', 'ഏ', 'ഐ', 'ഓ', 'ഔ', 'ഏ', 'ഓ'],
    marks: ['ാ', 'ി', 'ീ', 'ു', 'ൂ', 'ൃ', 'ൄ', 'ൢ', 'ൣ', 'േ', 'ൈ', 'ോ', 'ൗ', 'േ', 'ോ'],
    virama: s('്'),
    yogavaahas: ['ം', 'ഃ', 'ം', 'ᳵ', 'ᳶ', '़'],
    consonants: s(`
        ക ഖ ഗ ഘ ങ
        ച ഛ ജ ഝ ഞ
        ട ഠ ഡ ഢ ണ
        ത ഥ ദ ധ ന
        പ ഫ ബ ഭ മ
        യ ര ല വ
        ശ ഷ സ ഹ
        ള ക്ഷ ജ്ഞ
        ऩ ര ऴ क़ ख़ ग़ ज़ ड़ ढ़ फ़ य़
    `),
    symbols: s(`
        ഓം ഽ । ॥
        0 1 2 3 4 5 6 7 8 9
    `),
};


export const GranthaPandya = new BrahmicScriptDefinition({
    name: BrahmicScript.GRANTHA_PANDYA,
    isRoman: false,
    scheme: GranthaPandyaScheme,
});
