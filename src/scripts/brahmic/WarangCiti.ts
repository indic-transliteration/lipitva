import { IScriptScheme } from '../base';
import { s } from '../utils';

import { BrahmicScriptDefinition } from './base';
import { BrahmicScript } from '../../enum';


export const WarangCitiScheme: IScriptScheme = {
    vowels: ['𑣁', '𑣁𑣙', '𑣂', '𑣆', '𑣃', '𑣇', '𑣜𑣃', '𑣜𑣇', '𑣚𑣃', '𑣚𑣇', '𑣈', '𑣆', '𑣉', '𑣇', '𑣈', '𑣉'],
    marks: ['𑣁𑣙', '𑣂', '𑣆', '𑣃', '𑣇', '𑣜𑣃', '𑣜𑣇', '𑣚𑣃', '𑣚𑣇', '𑣈', '𑣆', '𑣉', '𑣇', '𑣈', '𑣉'],
    virama: s(''),
    yogavaahas: ['𑣀', '𑣄', '𑣀', 'ᳵ', 'ᳶ', '़'],
    consonants: s(`
        𑣌 𑣌 𑣋 𑣋 𑣊
        𑣏 𑣏 𑣎 𑣎 𑣍
        𑣒 𑣒 𑣑 𑣑 𑣐
        𑣕 𑣕 𑣔 𑣔 𑣓
        𑣘 𑣘 𑣗 𑣗 𑣖
        𑣅 𑣜 𑣚 𑣟
        𑣞 𑣞 𑣞 𑣙
        𑣚 𑣌𑣞 𑣎𑣍
        ऩ 𑣜 ऴ क़ ख़ ग़ ज़ ड़ ढ़ फ़ य़
    `),
    symbols: s(`
        𑣿 ' . ..
        𑣠 𑣡 𑣢 𑣣 𑣤 𑣥 𑣦 𑣧 𑣨 𑣩
    `),
};


export const WarangCiti = new BrahmicScriptDefinition({
    name: BrahmicScript.WARANG_CITI,
    isRoman: false,
    scheme: WarangCitiScheme,
});
