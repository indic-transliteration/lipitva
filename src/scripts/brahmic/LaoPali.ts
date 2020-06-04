import { IScriptScheme } from '../base';
import { s } from '../utils';

import { BrahmicScriptDefinition } from './base';
import { BrahmicScript } from '../../enum';


export const LaoPaliScheme: IScriptScheme = {
    vowels: ['ອ', 'ອາ', 'ອິ', 'ອີ', 'ອຸ', 'ອູ', 'ຣຸ', 'ຣູ', 'ລຸ', 'ລູ', 'ເອ', 'ໄອ', 'ໂອ', 'ເອົາ', 'ऎ', 'ऒ'],
    marks: ['າ', 'ິ', 'ີ', 'ຸ', 'ູ', '຺ຣຸ', '຺ຣູ', '຺ລຸ', '຺ລູ', 'ເ', 'ໄ', 'ໂ', 'ເົາ', '', ''],
    virama: s('຺'),
    yogavaahas: ['ໍ', 'ຫ໌', 'ໍ', 'ᳵ', 'ᳶ', '़'],
    consonants: s(`
        ກ ຂ ຄ ຆ ງ
        ຈ ຉ ຊ ຌ ຎ
        ຏ ຐ ຑ ຒ ຓ
        ຕ ຖ ທ ຘ ນ
        ປ ຜ ພ ຠ ມ
        ຍ ຣ ລ ວ
        ຨ ຩ ສ ຫ
        ຬ ກ຺ຩ ຊ຺ຎ
        ऩ ऱ ऴ क़ ख़ ग़ ज़ ड़ ढ़ फ़ य़
    `),
    symbols: s(`
        ໂອໍ ' । ॥
        ໐ ໑ ໒ ໓ ໔ ໕ ໖ ໗ ໘ ໙
    `),
};


export const LaoPali = new BrahmicScriptDefinition({
    name: BrahmicScript.LAO_PALI,
    isRoman: false,
    scheme: LaoPaliScheme,
});
