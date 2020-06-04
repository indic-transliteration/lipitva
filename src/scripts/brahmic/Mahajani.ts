import { IScriptScheme } from '../base';
import { s } from '../utils';

import { BrahmicScriptDefinition } from './base';
import { BrahmicScript } from '../../enum';


export const MahajaniScheme: IScriptScheme = {
    vowels: ['𑅐', '𑅐', '𑅑', '𑅑', '𑅒', '𑅒', '𑅭𑅒', '𑅭𑅒', '𑅮𑅒', '𑅮𑅒', '𑅓', '𑅑', '𑅔', '𑅒', '𑅓', '𑅔'],
    marks: ['𑅐', '𑅑', '𑅑', '𑅒', '𑅒', '𑅭𑅒', '𑅭𑅒', '𑅮𑅒', '𑅮𑅒', '𑅓', '𑅑', '𑅔', '𑅒', '𑅓', '𑅔'],
    virama: s(''),
    yogavaahas: ['𑅧', '𑅱', '𑅧', 'ᳵ', 'ᳶ', '़'],
    consonants: s(`
        𑅕 𑅖 𑅗 𑅘 𑅧
        𑅙 𑅚 𑅛 𑅜 𑅝
        𑅞 𑅟 𑅠 𑅡 𑅢
        𑅣 𑅤 𑅥 𑅦 𑅧
        𑅨 𑅩 𑅪 𑅫 𑅬
        𑅛 𑅭 𑅮 𑅯
        𑅰𑅳 𑅖𑅳 𑅰 𑅱
        𑅮𑅳 𑅕𑅖𑅳 𑅛𑅝
        ऩ 𑅭𑅳 ऴ क़ ख़ ग़ ज़ ड़ ढ़ फ़ य़
    `),
    symbols: s(`
        𑅔𑅬 ऽ । ॥
        ० १ २ ३ ४ ५ ६ ७ ८ ९
    `),
};


export const Mahajani = new BrahmicScriptDefinition({
    name: BrahmicScript.MAHAJANI,
    isRoman: false,
    scheme: MahajaniScheme,
});
