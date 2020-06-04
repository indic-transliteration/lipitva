import { IScriptScheme } from '../base';
import { s } from '../utils';

import { BrahmicScriptDefinition } from './base';
import { BrahmicScript } from '../../enum';


export const SiddhamScheme: IScriptScheme = {
    vowels: ['𑖀', '𑖁', '𑖂', '𑖃', '𑖄', '𑖅', '𑖆', '𑖇', '𑖈', '𑖉', '𑖊', '𑖋', '𑖌', '𑖍', '𑖊', '𑖌'],
    marks: ['𑖯', '𑖰', '𑖱', '𑖲', '𑖳', '𑖴', '𑖵', '𑖿𑖩𑖰', '𑖿𑖩𑖱', '𑖸', '𑖹', '𑖺', '𑖻', '𑖸', '𑖺'],
    virama: s('𑖿'),
    yogavaahas: ['𑖽', '𑖾', '𑖼', 'ᳵ', 'ᳶ', '़'],
    consonants: s(`
        𑖎 𑖏 𑖐 𑖑 𑖒
        𑖓 𑖔 𑖕 𑖖 𑖗
        𑖘 𑖙 𑖚 𑖛 𑖜
        𑖝 𑖞 𑖟 𑖠 𑖡
        𑖢 𑖣 𑖤 𑖥 𑖦
        𑖧 𑖨 𑖩 𑖪
        𑖫 𑖬 𑖭 𑖮
        𑖩𑗀 𑖎𑖿𑖬 𑖕𑖿𑖗
        ऩ 𑖨𑗀 ऴ क़ ख़ ग़ ज़ ड़ ढ़ फ़ य़
    `),
    symbols: s(`
        𑖌𑖼 ऽ 𑗂 𑗃
        0 1 2 3 4 5 6 7 8 9
    `),
};


export const Siddham = new BrahmicScriptDefinition({
    name: BrahmicScript.SIDDHAM,
    isRoman: false,
    scheme: SiddhamScheme,
});
