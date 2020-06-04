import { IScriptScheme } from '../base';
import { s } from '../utils';

import { BrahmicScriptDefinition } from './base';
import { BrahmicScript } from '../../enum';


export const ModiScheme: IScriptScheme = {
    vowels: ['𑘀', '𑘁', '𑘃', '𑘃', '𑘄', '𑘄', '𑘨𑘲', '𑘨𑘲', '𑘩𑘲', '𑘩𑘲', '𑘊', '𑘋', '𑘌', '𑘍', 'ऎ', 'ऒ'],
    marks: ['𑘰', '𑘲', '𑘲', '𑘳', '𑘳', '𑘿𑘨𑘲', '𑘿𑘨𑘲', '𑘿𑘩𑘲', '𑘿𑘩𑘲', '𑘹', '𑘺', '𑘻', '𑘼', '', ''],
    virama: s('𑘿'),
    yogavaahas: ['𑘽', '𑘾', '𑘽', 'ᳵ', 'ᳶ', '़'],
    consonants: s(`
        𑘎 𑘏 𑘐 𑘑 𑘒
        𑘓 𑘔 𑘕 𑘖 𑘗
        𑘘 𑘙 𑘚 𑘛 𑘜
        𑘝 𑘞 𑘟 𑘠 𑘡
        𑘢 𑘣 𑘤 𑘥 𑘦
        𑘧 𑘨 𑘩 𑘪
        𑘫 𑘬 𑘭 𑘮
        𑘯 𑘎𑘿𑘬 𑘕𑘿𑘗
        ऩ ऱ ऴ क़ ख़ ग़ ज़ ड़ ढ़ फ़ य़
    `),
    symbols: s(`
        𑘌𑘽 ऽ । ॥
        𑙐 𑙑 𑙒 𑙓 𑙔 𑙕 𑙖 𑙗 𑙘 𑙙
    `),
};


export const Modi = new BrahmicScriptDefinition({
    name: BrahmicScript.MODI,
    isRoman: false,
    scheme: ModiScheme,
});
