import { IScriptScheme } from '../base';
import { s } from '../utils';

import { BrahmicScriptDefinition } from './base';
import { BrahmicScript } from '../../enum';


export const TagbanwaScheme: IScriptScheme = {
    vowels: ['ᝠ', 'ᝠ', 'ᝡ', 'ᝡ', 'ᝢ', 'ᝢ', 'ᝮᝳ', 'ᝮᝳ', 'ᝮᝳ', 'ᝮᝳ', 'ᝡ', 'ᝠᝡ', 'ᝢ', 'ᝠᝢ', 'ᝡ', 'ᝢ'],
    marks: ['', 'ᝲ', 'ᝲ', 'ᝳ', 'ᝳ', 'ᝮᝳ', 'ᝮᝳ', 'ᝮᝳ', 'ᝮᝳ', 'ᝲ', 'ᝡ', 'ᝳ', 'ᝢ', 'ᝲ', 'ᝳ'],
    virama: s(''),
    yogavaahas: ['ᝫ', 'ᝣ', 'ᝫ', 'ᳵ', 'ᳶ', '़'],
    consonants: s(`
        ᝣ ᝣ ᝤ ᝤ ᝥ
        ᝰ ᝰ ᝧ ᝧ ᝨ
        ᝦ ᝦ ᝧ ᝧ ᝨ
        ᝦ ᝦ ᝧ ᝧ ᝨ
        ᝩ ᝩ ᝪ ᝪ ᝫ
        ᝬ ᝮ ᝮ ᝯ
        ᝰ ᝰ ᝰ ᝣ
        ᝮ ᝣᝰ ᝧᝨ
        ऩ ᝮ ऴ क़ ख़ ग़ ज़ ड़ ढ़ फ़ य़
    `),
    symbols: s(`
        ᝢᝫ ऽ ᜵ ᜶
        0 1 2 3 4 5 6 7 8 9
    `),
};


export const Tagbanwa = new BrahmicScriptDefinition({
    name: BrahmicScript.TAGBANWA,
    isRoman: false,
    scheme: TagbanwaScheme,
});
