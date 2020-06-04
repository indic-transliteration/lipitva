import { IScriptScheme } from '../base';
import { s } from '../utils';

import { BrahmicScriptDefinition } from './base';
import { BrahmicScript } from '../../enum';


export const ThaiScheme: IScriptScheme = {
    vowels: ['อ', 'อา', 'อิ', 'อี', 'อุ', 'อู', 'ฤ', 'ฤๅ', 'ฦ', 'ฦๅ', 'เอ', 'ไอ', 'โอ', 'เอา', 'เอะ', 'โอะ'],
    marks: ['า', 'ิ', 'ี', 'ุ', 'ู', 'ฺฤ', 'ฺฤๅ', 'ฺฦ', 'ฺฦๅ', 'เ', 'ไ', 'โ', 'เา', 'เะ', 'โะ'],
    virama: s('ฺ'),
    yogavaahas: ['ํ', 'ห์', 'ํ', 'ᳵ', 'ᳶ', '़'],
    consonants: s(`
        ก ข ค ฆ ง
        จ ฉ ช ฌ ญ
        ฏ ฐ ฑ ฒ ณ
        ต ถ ท ธ น
        ป ผ พ ภ ม
        ย ร ล ว
        ศ ษ ส ห
        ฬ กฺษ ชฺญ
        ऩ ร ऴ क़ ख़ ग़ ज़ ड़ ढ़ फ़ य़
    `),
    symbols: s(`
        โอํ ' ฯ ๚
        ๐ ๑ ๒ ๓ ๔ ๕ ๖ ๗ ๘ ๙
    `),
};


export const Thai = new BrahmicScriptDefinition({
    name: BrahmicScript.THAI,
    isRoman: false,
    scheme: ThaiScheme,
});
