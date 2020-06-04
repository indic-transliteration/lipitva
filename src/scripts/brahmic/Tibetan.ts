import { IScriptScheme } from '../base';
import { s } from '../utils';

import { BrahmicScriptDefinition } from './base';
import { BrahmicScript } from '../../enum';


export const TibetanScheme: IScriptScheme = {
    vowels: ['ཨ', 'ཨཱ', 'ཨི', 'ཨཱི', 'ཨུ', 'ཨཱུ', 'རྀ', 'རཱྀ', 'ལྀ', 'ལཱྀ', 'ཨེ', 'ཨཻ', 'ཨོ', 'ཨཽ', 'ཨེ', 'ཨོ'],
    marks: ['ཱ', 'ི', 'ཱི', 'ུ', 'ཱུ', 'ྲྀ', 'ྲཱྀ', 'ླྀ', 'ླཱྀ', 'ེ', 'ཻ', 'ོ', 'ཽ', 'ེ', 'ོ'],
    virama: s(''),
    yogavaahas: ['ཾ', 'ཿ', 'ྃ', 'ᳵ', 'ᳶ', '़'],
    consonants: s(`
        ཀ ཁ ག གྷ ང
        ཙ ཚ ཛ ཛྷ ཉ
        ཊ ཋ ཌ ཌྷ ཎ
        ཏ ཐ ད དྷ ན
        པ ཕ བ བྷ མ
        ཡ ར ལ བ
        ཤ ཥ ས ཧ
        ལ༹ ཀཥ ཛཉ
        ऩ ར༹ ऴ क़ ख़ ग़ ज़ ड़ ढ़ फ़ य़
    `),
    symbols: s(`
        ༀ ྅ ། ༎
        ༠ ༡ ༢ ༣ ༤ ༥ ༦ ༧ ༨ ༩
    `),
};


export const Tibetan = new BrahmicScriptDefinition({
    name: BrahmicScript.TIBETAN,
    isRoman: false,
    scheme: TibetanScheme,
});
