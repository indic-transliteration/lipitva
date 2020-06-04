import { IScriptScheme } from '../base';
import { s } from '../utils';

import { BrahmicScriptDefinition } from './base';
import { BrahmicScript } from '../../enum';


export const NewaScheme: IScriptScheme = {
    vowels: ['𑐀', '𑐁', '𑐂', '𑐃', '𑐄', '𑐅', '𑐆', '𑐇', '𑐈', '𑐉', '𑐊', '𑐋', '𑐌', '𑐍', 'ऎ', 'ऒ'],
    marks: ['𑐵', '𑐶', '𑐷', '𑐸', '𑐹', '𑐺', '𑐻', '𑐼', '𑐽', '𑐾', '𑐿', '𑑀', '𑑁', '', ''],
    virama: s('𑑂'),
    yogavaahas: ['𑑄', '𑑅', '𑑃', 'ᳵ', 'ᳶ', '़'],
    consonants: s(`
        𑐎 𑐏 𑐐 𑐑 𑐒
        𑐔 𑐕 𑐖 𑐗 𑐘
        𑐚 𑐛 𑐜 𑐝 𑐞
        𑐟 𑐠 𑐡 𑐢 𑐣
        𑐥 𑐦 𑐧 𑐨 𑐩
        𑐫 𑐬 𑐮 𑐰
        𑐱 𑐲 𑐳 𑐴
        𑐮𑑆 𑐎𑑂𑐲 𑐖𑑂𑐘
        ऩ ऱ ऴ क़ ख़ ग़ ज़ ड़ ढ़ फ़ य़
    `),
    symbols: s(`
        𑑉 𑑇 । ॥
        𑑐 𑑑 𑑒 𑑓 𑑔 𑑕 𑑖 𑑗 𑑘 𑑙
    `),
};


export const Newa = new BrahmicScriptDefinition({
    name: BrahmicScript.NEWA,
    isRoman: false,
    scheme: NewaScheme,
});
