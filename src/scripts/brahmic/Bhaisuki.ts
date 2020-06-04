import { IScriptScheme } from '../base';
import { s } from '../utils';

import { BrahmicScriptDefinition } from './base';
import { BrahmicScript } from '../../enum';


export const BhaisukiScheme: IScriptScheme = {
    vowels: ['𑰀', '𑰁', '𑰂', '𑰃', '𑰄', '𑰅', '𑰆', '𑰇', '𑰈', '𑰈', '𑰊', '𑰋', '𑰌', '𑰍', '𑰊', '𑰌'],
    marks: ['𑰯', '𑰰', '𑰱', '𑰲', '𑰳', '𑰴', '𑰵', '𑰶', '𑰶', '𑰸', '𑰹', '𑰺', '𑰻', '𑰸', '𑰺'],
    virama: s('𑰿'),
    yogavaahas: ['𑰽', '𑰾', '𑰼', 'ᳵ', 'ᳶ', '़'],
    consonants: s(`
        𑰎 𑰏 𑰐 𑰑 𑰒
        𑰓 𑰔 𑰕 𑰖 𑰗
        𑰘 𑰙 𑰚 𑰛 𑰜
        𑰝 𑰞 𑰟 𑰠 𑰡
        𑰢 𑰣 𑰤 𑰥 𑰦
        𑰧 𑰨 𑰩 𑰪
        𑰫 𑰬 𑰭 𑰮
        𑰩 𑰎𑰿𑰬 𑰕𑰿𑰗
        ऩ 𑰨 ऴ क़ ख़ ग़ ज़ ड़ ढ़ फ़ य़
    `),
    symbols: s(`
        𑰌𑰼 𑱀 𑱁 𑱂
        𑱐 𑱑 𑱒 𑱓 𑱔 𑱕 𑱖 𑱗 𑱘 𑱙
    `),
};


export const Bhaisuki = new BrahmicScriptDefinition({
    name: BrahmicScript.BHAISUKI,
    isRoman: false,
    scheme: BhaisukiScheme,
});
