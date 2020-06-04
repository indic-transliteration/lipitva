import { IScriptScheme } from '../base';
import { s } from '../utils';

import { BrahmicScriptDefinition } from './base';
import { BrahmicScript } from '../../enum';


export const KhomThaiScheme: IScriptScheme = {
    vowels: ['อ', 'อา', 'อิ', 'อี', 'อุ', 'อู', 'รุ', 'รู', 'ลุ', 'ลู', 'เอ', 'อยฺ', 'โอ', 'อวฺ', 'ऎ', 'ऒ'],
    marks: ['า', 'ิ', 'ี', 'ุ', 'ู', 'ฺฤ', 'ฺฤๅ', 'ฺลุ', 'ฺลู', 'เ', 'ใ', 'โ', 'วฺ', '', ''],
    virama: s('ฺ'),
    yogavaahas: ['ํ', 'หฺ', 'ํ', 'ᳵ', 'ᳶ', '़'],
    consonants: s(`
        ก ข ค ฆ ง
        จ ฉ ช ฌ ญ
        ฏ ฐ ฑ ฒ ณ
        ต ถ ท ธ น
        ป ผ พ ภ ม
        ย ร ล ว
        ส ส ส ห
        ฬ กฺส ชฺญ
        ऩ ऱ ऴ क़ ख़ ग़ ज़ ड़ ढ़ फ़ य़
    `),
    symbols: s(`
        โอํ ऽ । ॥
        ๐ ๑ ๒ ๓ ๔ ๕ ๖ ๗ ๘ ๙
    `),
};


export const KhomThai = new BrahmicScriptDefinition({
    name: BrahmicScript.KHOM_THAI,
    isRoman: false,
    scheme: KhomThaiScheme,
});
