import { IScriptScheme } from '../base';
import { s } from '../utils';

import { BrahmicScriptDefinition } from './base';
import { BrahmicScript } from '../../enum';


export const MalayalamScheme: IScriptScheme = {
    vowels: s('അ ആ ഇ ഈ ഉ ഊ ഋ ൠ ഌ ൡ ഏ ഐ ഓ ഔ എ ഒ'),
    marks: s('ാ ി ീ ു ൂ ൃ ൄ ൢ ൣ േ ൈ ോ ൌ െ ൊ'),
    virama: s('്'),
    yogavaahas: s('ം ഃ ഁ'),
    consonants: s(`
        ക ഖ ഗ ഘ ങ
        ച ഛ ജ ഝ ഞ
        ട ഠ ഡ ഢ ണ
        ത ഥ ദ ധ ന
        പ ഫ ബ ഭ മ
        യ ര ല വ
        ശ ഷ സ ഹ
        ള ക്ഷ ജ്ഞ
        ഩ റ ഴ
    `),
    symbols: s(`
        ഓം ഽ । ॥
        ൦ ൧ ൨ ൩ ൪ ൫ ൬ ൭ ൮ ൯
    `),
};


export const Malayalam = new BrahmicScriptDefinition({
    name: BrahmicScript.MALAYALAM,
    isRoman: false,
    scheme: MalayalamScheme,
});
