import { IScriptScheme } from '../base';
import { s } from '../utils';

import { BrahmicScriptDefinition } from './base';
import { BrahmicScript } from '../../enum';


export const ZanbazarSquareScheme: IScriptScheme = {
    vowels: ['𑨀', '𑨀𑨊', '𑨀𑨁', '𑨀𑨁𑨊', '𑨀𑨂', '𑨀𑨂𑨊', '𑨫𑨉', '𑨫𑨉𑨊', '𑨬𑨉', '𑨬𑨉𑨊', '𑨀𑨄', '𑨀𑨄𑨊', '𑨀𑨆', '𑨀𑨆𑨊', '𑨀𑨄', '𑨀𑨆'],
    marks: ['𑨊', '𑨁', '𑨁𑨊', '𑨂', '𑨂𑨊', '𑩇𑨫𑨉', '𑩇𑨫𑨉𑨊', '𑩇𑨬𑨉', '𑩇𑨬𑨉𑨊', '𑨄', '𑨄𑨊', '𑨆', '𑨆𑨊', '𑨄', '𑨆'],
    virama: s('𑨴'),
    yogavaahas: ['𑨸', '𑨹', '𑨵', 'ᳵ', 'ᳶ', '़'],
    consonants: s(`
        𑨋 𑨌 𑨍 𑨎 𑨏
        𑨣 𑨤 𑨥 𑨦 𑨓
        𑨔 𑨕 𑨖 𑨗 𑨘
        𑨙 𑨚 𑨛 𑨜 𑨝
        𑨞 𑨟 𑨠 𑨡 𑨢
        𑨪 𑨫 𑨬 𑨭
        𑨮 𑨯 𑨰 𑨱
        𑨬 𑨋𑨴𑨯 𑨥𑨴𑨓
        ऩ 𑨫 ऴ क़ ख़ ग़ ज़ ड़ ढ़ फ़ य़
    `),
    symbols: s(`
        𑨀𑨆𑨵 ऽ 𑩂 𑩃
        0 1 2 3 4 5 6 7 8 9
    `),
};


export const ZanbazarSquare = new BrahmicScriptDefinition({
    name: BrahmicScript.ZANBAZAR_SQUARE,
    isRoman: false,
    scheme: ZanbazarSquareScheme,
});
