import { IScriptScheme } from '../base';
import { s } from '../utils';

import { BrahmicScriptDefinition } from './base';
import { BrahmicScript } from '../../enum';


export const MultaniScheme: IScriptScheme = {
    vowels: ['𑊀', '𑊀', '𑊁', '𑊁', '𑊂', '𑊂', '𑊢𑊂', '𑊢𑊂', '𑊣𑊂', '𑊣𑊂', '𑊃', '𑊃', '𑊂', '𑊂', 'ऎ', 'ऒ'],
    marks: ['𑊀', '𑊁', '𑊁', '𑊂', '𑊂', '𑊢𑊂', '𑊢𑊂', '𑊣𑊂', '𑊣𑊂', '𑊃', '𑊃', '𑊂', '𑊂', '', ''],
    virama: s(''),
    yogavaahas: ['𑊚', '𑊦', '𑊚', 'ᳵ', 'ᳶ', '़'],
    consonants: s(`
        𑊄 𑊅 𑊆 𑊈 𑊚
        𑊊 𑊋 𑊌 𑊌 𑊏
        𑊐 𑊑 𑊒 𑊔 𑊕
        𑊖 𑊗 𑊘 𑊙 𑊚
        𑊛 𑊜 𑊝 𑊟 𑊠
        𑊡 𑊢 𑊣 𑊤
        𑊥 𑊥 𑊥 𑊦
        𑊣 𑊄𑊥 𑊌𑊏
        ऩ ऱ ऴ क़ ख़ ग़ ज़ ड़ ढ़ फ़ य़
    `),
    symbols: s(`
        𑊂𑊠 ऽ । ॥
        ੦ ੧ ੨ ੩ ੪ ੫ ੬ ੭ ੮ ੯
    `),
};


export const Multani = new BrahmicScriptDefinition({
    name: BrahmicScript.MULTANI,
    isRoman: false,
    scheme: MultaniScheme,
});
