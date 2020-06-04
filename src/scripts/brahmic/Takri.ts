import { IScriptScheme } from '../base';
import { s } from '../utils';

import { BrahmicScriptDefinition } from './base';
import { BrahmicScript } from '../../enum';


export const TakriScheme: IScriptScheme = {
    vowels: ['𑚀', '𑚁', '𑚂', '𑚃', '𑚄', '𑚅', '𑚤𑚮', '𑚤𑚯', '𑚥𑚮', '𑚥𑚯', '𑚆', '𑚇', '𑚈', '𑚉', '𑚆', '𑚈'],
    marks: ['𑚭', '𑚮', '𑚯', '𑚰', '𑚱', '𑚶𑚤𑚮', '𑚶𑚤𑚯', '𑚶𑚥𑚮', '𑚶𑚥𑚯', '𑚲', '𑚳', '𑚴', '𑚵', '𑚳', '𑚴'],
    virama: s('𑚶'),
    yogavaahas: ['𑚫', '𑚬', '𑚫', 'ᳵ', 'ᳶ', '़'],
    consonants: s(`
        𑚊 𑚋 𑚌 𑚍 𑚎
        𑚏 𑚐 𑚑 𑚒 𑚓
        𑚔 𑚕 𑚖 𑚗 𑚘
        𑚙 𑚚 𑚛 𑚜 𑚝
        𑚞 𑚟 𑚠 𑚡 𑚢
        𑚣 𑚤 𑚥 𑚦
        𑚧 𑚋 𑚨 𑚩
        𑚥𑚷 𑚊𑚶𑚋 𑚑𑚶𑚓
        ऩ 𑚤𑚷 ऴ क़ ख़ ग़ ज़ ड़ ढ़ फ़ य़
    `),
    symbols: s(`
        𑚈𑚫 ऽ । ॥
        𑛀 𑛁 𑛂 𑛃 𑛄 𑛅 𑛆 𑛇 𑛈 𑛉
    `),
};


export const Takri = new BrahmicScriptDefinition({
    name: BrahmicScript.TAKRI,
    isRoman: false,
    scheme: TakriScheme,
});
