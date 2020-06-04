import { IScriptScheme } from '../base';
import { s } from '../utils';

import { BrahmicScriptDefinition } from './base';
import { BrahmicScript } from '../../enum';


export const CyrillicScheme: IScriptScheme = {
    vowels: ['а', 'а̄', 'и', 'ӣ', 'у', 'ӯ', 'р̣', 'р̣̄', 'л̣', 'л̣̄', 'э', 'аи', 'о', 'ау', 'э̆', 'о̆'],
    marks: ['а̄', 'и', 'ӣ', 'у', 'ӯ', 'р̣', 'р̣̄', 'л̣', 'л̣̄', 'э', 'аи', 'о', 'ау', 'э̆', 'о̆'],
    virama: s(''),
    yogavaahas: ['м̣', 'х̣', 'м̐', 'ᳵ', 'ᳶ', '़'],
    consonants: s(`
        ка кха га гха н̇а
        ча чха джа джха н̃а
        т̣а т̣ха д̣а д̣ха н̣а
        та тха да дха на
        па пха ба бха ма
        йа ра ла ва
        ш́а ша са ха
        л̤а кша джн̃а
        ऩ р̱а ऴ क़ ख़ ग़ ज़ ड़ ढ़ फ़ य़
    `),
    symbols: s(`
        ом̣ ' । ॥
        0 1 2 3 4 5 6 7 8 9
    `),
};


export const Cyrillic = new BrahmicScriptDefinition({
    name: BrahmicScript.CYRILLIC,
    isRoman: false,
    scheme: CyrillicScheme,
});
