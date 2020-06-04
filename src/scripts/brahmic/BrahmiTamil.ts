import { IScriptScheme } from '../base';
import { s } from '../utils';

import { BrahmicScriptDefinition } from './base';
import { BrahmicScript } from '../../enum';


export const BrahmiTamilScheme: IScriptScheme = {
    vowels: ['𑀅', '𑀆', '𑀇', '𑀈', '𑀉', '𑀊', '𑀭𑀼', '𑀭𑀽', '𑀮𑀼', '𑀮𑀽', '𑀏', '𑀐', '𑀑', '𑀒', '𑀏𑁆', '𑀑𑁆'],
    marks: ['𑀸', '𑀺', '𑀻', '𑀼', '𑀽', '𑁆𑀭𑀼', '𑁆𑀭𑀽', '𑁆𑀮𑀼', '𑁆𑀮𑀽', '𑁂', '𑁃', '𑁄', '𑁅', '𑁂𑁆', '𑁄𑁆'],
    virama: s('𑁆'),
    yogavaahas: ['𑀫𑁆', '𑀂', '𑀫𑁆', 'ᳵ', 'ᳶ', '़'],
    consonants: s(`
        𑀓 𑀓 𑀓 𑀓 𑀗
        𑀘 𑀘 𑀚 𑀚 𑀜
        𑀝 𑀝 𑀝 𑀝 𑀡
        𑀢 𑀢 𑀢 𑀥 𑀦
        𑀧 𑀧 𑀧 𑀧 𑀫
        𑀬 𑀭 𑀮 𑀯
        𑀰 𑀱 𑀲 𑀳
        𑀴 𑀓𑁆𑀱 𑀚𑁆𑀜
        ऩ 𑀶 ऴ क़ ख़ ग़ ज़ ड़ ढ़ फ़ य़
    `),
    symbols: s(`
        𑀑𑀫𑁆 ' . ..
        0 1 2 3 4 5 6 7 8 9
    `),
};


export const BrahmiTamil = new BrahmicScriptDefinition({
    name: BrahmicScript.BRAHMI_TAMIL,
    isRoman: false,
    scheme: BrahmiTamilScheme,
});
