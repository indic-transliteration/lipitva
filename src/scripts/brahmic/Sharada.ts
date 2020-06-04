import { IScriptScheme } from '../base';
import { s } from '../utils';

import { BrahmicScriptDefinition } from './base';
import { BrahmicScript } from '../../enum';


export const SharadaScheme: IScriptScheme = {
    vowels: ['𑆃', '𑆄', '𑆅', '𑆆', '𑆇', '𑆈', '𑆉', '𑆊', '𑆋', '𑆌', '𑆍', '𑆎', '𑆏', '𑆐', '𑆍𑇌', '𑆏𑇌'],
    marks: ['𑆳', '𑆴', '𑆵', '𑆶', '𑆷', '𑆸', '𑆹', '𑆺', '𑆻', '𑆼', '𑆽', '𑆾', '𑆿', '𑆼𑇌', '𑆾𑇌'],
    virama: s('𑇀'),
    yogavaahas: ['𑆁', '𑆂', '𑆀', 'ᳵ', 'ᳶ', '़'],
    consonants: s(`
        𑆑 𑆒 𑆓 𑆔 𑆕
        𑆖 𑆗 𑆘 𑆙 𑆚
        𑆛 𑆜 𑆝 𑆞 𑆟
        𑆠 𑆡 𑆢 𑆣 𑆤
        𑆥 𑆦 𑆧 𑆨 𑆩
        𑆪 𑆫 𑆬 𑆮
        𑆯 𑆰 𑆱 𑆲
        𑆭 𑆑𑇀𑆰 𑆘𑇀𑆚
        ऩ 𑆫𑇊 ऴ क़ ख़ ग़ ज़ ड़ ढ़ फ़ य़
    `),
    symbols: s(`
        𑆏𑆀 𑇁 𑇅 𑇆
        𑇐 𑇑 𑇒 𑇓 𑇔 𑇕 𑇖 𑇗 𑇘 𑇙
    `),
};


export const Sharada = new BrahmicScriptDefinition({
    name: BrahmicScript.SHARADA,
    isRoman: false,
    scheme: SharadaScheme,
});
