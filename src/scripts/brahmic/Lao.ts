import { IScriptScheme } from '../base';
import { s } from '../utils';

import { BrahmicScriptDefinition } from './base';
import { BrahmicScript } from '../../enum';


export const LaoScheme: IScriptScheme = {
    vowels: ['ອະ', 'ອາ', 'ອິ', 'ອີ', 'ອຸ', 'ອູ', 'ຣຸ', 'ຣູ', 'ລຸ', 'ລູ', 'ເອ', 'ໄອ', 'ໂອ', 'ເອົາ', 'ऎ', 'ऒ'],
    marks: ['າ', 'ິ', 'ີ', 'ຸ', 'ູ', 'ຣຸ', 'ຣູ', 'ລຸ', 'ລູ', 'ເ', 'ໄ', 'ໂ', 'ເົາ', '', ''],
    virama: s(''),
    yogavaahas: ['ງ', 'ຫ', 'ງ', 'ᳵ', 'ᳶ', '़'],
    consonants: s(`
        ກະ ຂະ ຄະ ຄະ ງະ
        ຈະ ຈະ ຊະ ຊະ ຍະ
        ຕະ ຖະ ທະ ທະ ນະ
        ຕະ ຖະ ທະ ທະ ນະ
        ປະ ຜະ ພະ ພະ ມະ
        ຢະ ຣະ ລະ ວະ
        ສະ ສະ ສະ ຫະ
        ລະ ກະສະ ຊະຍະ
        ऩ ऱ ऴ क़ ख़ ग़ ज़ ड़ ढ़ फ़ य़
    `),
    symbols: s(`
        ໂອງ ' । ॥
        ໐ ໑ ໒ ໓ ໔ ໕ ໖ ໗ ໘ ໙
    `),
};


export const Lao = new BrahmicScriptDefinition({
    name: BrahmicScript.LAO,
    isRoman: false,
    scheme: LaoScheme,
});
