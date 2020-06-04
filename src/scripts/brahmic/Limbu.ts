import { IScriptScheme } from '../base';
import { s } from '../utils';

import { BrahmicScriptDefinition } from './base';
import { BrahmicScript } from '../../enum';


export const LimbuScheme: IScriptScheme = {
    vowels: ['ᤀ', 'ᤀᤠ', 'ᤀᤡ', 'ᤀᤡ᤺', 'ᤀᤢ', 'ᤀ᤺ᤢ', 'ᤖᤢ', 'ᤖ᤺ᤢ', 'ᤗᤢ', 'ᤗ᤺ᤢ', 'ᤀᤣ', 'ᤀᤤ', 'ᤀᤥ', 'ᤀᤦ', 'ऎ', 'ऒ'],
    marks: ['ᤠ', 'ᤡ', 'ᤡ᤺', 'ᤢ', '᤺ᤢ', 'ᤪᤢ', 'ᤪ᤺ᤢ', '᤻ᤗᤢ', '᤻ᤗ᤺ᤢ', 'ᤣ', 'ᤤ', 'ᤥ', 'ᤦ', '', ''],
    virama: s('᤻'),
    yogavaahas: ['ᤱ', 'ᤜ᤻', 'ᤱ', 'ᳵ', 'ᳶ', '़'],
    consonants: s(`
        ᤁ ᤂ ᤃ ᤄ ᤅ
        ᤆ ᤇ ᤈ ᤈ ᤏ
        ᤋ ᤌ ᤍ ᤎ ᤏ
        ᤋ ᤌ ᤍ ᤎ ᤏ
        ᤐ ᤑ ᤒ ᤓ ᤔ
        ᤕ ᤖ ᤗ ᤘ
        ᤙ ᤙ ᤛ ᤜ
        ᤗ ᤁ᤻ᤙ ᤈ᤻ᤏ
        ऩ ऱ ऴ क़ ख़ ग़ ज़ ड़ ढ़ फ़ य़
    `),
    symbols: s(`
        ᤀᤥᤱ ' । ॥
        ᥆ ᥇ ᥈ ᥉ ᥊ ᥋ ᥌ ᥍ ᥎ ᥏
    `),
};


export const Limbu = new BrahmicScriptDefinition({
    name: BrahmicScript.LIMBU,
    isRoman: false,
    scheme: LimbuScheme,
});
