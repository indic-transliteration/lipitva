import { IScriptScheme } from '../base';
import { s } from '../utils';

import { BrahmicScriptDefinition } from './base';
import { BrahmicScript } from '../../enum';


export const TagalogScheme: IScriptScheme = {
    vowels: ['ᜀ', 'ᜀ', 'ᜁ', 'ᜁ', 'ᜂ', 'ᜂ', 'ᜎᜓ', 'ᜎᜓ', 'ᜎᜓ', 'ᜎᜓ', 'ᜁ', 'ᜀᜁ', 'ᜂ', 'ᜀᜂ', 'ᜁ', 'ᜂ'],
    marks: ['', 'ᜒ', 'ᜒ', 'ᜓ', 'ᜓ', '᜔ᜎᜓ', '᜔ᜎᜓ', '᜔ᜎᜓ', '᜔ᜎᜓ', 'ᜒ', 'ᜁ', 'ᜓ', 'ᜂ', 'ᜒ', 'ᜓ'],
    virama: s('᜔'),
    yogavaahas: ['ᜋ᜔', 'ᜑ᜔', 'ᜋ᜔', 'ᳵ', 'ᳶ', '़'],
    consonants: s(`
        ᜃ ᜃ ᜄ ᜄ ᜅ
        ᜐ ᜐ ᜇ ᜇ ᜈ
        ᜆ ᜆ ᜇ ᜇ ᜈ
        ᜆ ᜆ ᜇ ᜇ ᜈ
        ᜉ ᜉ ᜊ ᜊ ᜋ
        ᜌ ᜎ ᜎ ᜏ
        ᜐ ᜐ ᜐ ᜑ
        ᜎ ᜃ᜔ᜐ ᜇ᜔ᜈ
        ऩ ᜎ ऴ क़ ख़ ग़ ज़ ड़ ढ़ फ़ य़
    `),
    symbols: s(`
        ᜂᜋ᜔ ऽ ᜵ ᜶
        0 1 2 3 4 5 6 7 8 9
    `),
};


export const Tagalog = new BrahmicScriptDefinition({
    name: BrahmicScript.TAGALOG,
    isRoman: false,
    scheme: TagalogScheme,
});
