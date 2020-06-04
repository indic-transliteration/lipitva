import { IScriptScheme } from '../base';
import { s } from '../utils';

import { BrahmicScriptDefinition } from './base';
import { BrahmicScript } from '../../enum';


export const BrahmiScheme: IScriptScheme = {
    vowels: ['𑀅', '𑀆', '𑀇', '𑀈', '𑀉', '𑀊', '𑀋', '𑀌', '𑀍', '𑀎', '𑀏', '𑀐', '𑀑', '𑀒', '𑀏𑁆', '𑀑𑁆'],
    marks: ['𑀸', '𑀺', '𑀻', '𑀼', '𑀽', '𑀾', '𑀿', '𑁀', '𑁁', '𑁂', '𑁃', '𑁄', '𑁅', '𑁂', '𑁄'],
    virama: s('𑁆'),
    yogavaahas: ['𑀁', '𑀂', '𑀀', 'ᳵ', 'ᳶ', '़'],
    consonants: s(`
        𑀓 𑀔 𑀕 𑀖 𑀗
        𑀘 𑀙 𑀚 𑀛 𑀜
        𑀝 𑀞 𑀟 𑀠 𑀡
        𑀢 𑀣 𑀤 𑀥 𑀦
        𑀧 𑀨 𑀩 𑀪 𑀫
        𑀬 𑀭 𑀮 𑀯
        𑀰 𑀱 𑀲 𑀳
        𑀴 𑀓𑁆𑀱 𑀚𑁆𑀜
        ऩ 𑀭 ऴ क़ ख़ ग़ ज़ ड़ ढ़ फ़ य़
    `),
    symbols: s(`
        𑀑𑀁 ऽ 𑁇 𑁈
        𑁦 𑁧 𑁨 𑁩 𑁪 𑁫 𑁬 𑁭 𑁮 𑁯
    `),
};


export const Brahmi = new BrahmicScriptDefinition({
    name: BrahmicScript.BRAHMI,
    isRoman: false,
    scheme: BrahmiScheme,
});
