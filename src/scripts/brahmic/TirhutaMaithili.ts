import { IScriptScheme } from '../base';
import { s } from '../utils';

import { BrahmicScriptDefinition } from './base';
import { BrahmicScript } from '../../enum';


export const TirhutaMaithiliScheme: IScriptScheme = {
    vowels: ['𑒁', '𑒂', '𑒃', '𑒄', '𑒅', '𑒆', '𑒇', '𑒈', '𑒉', '𑒊', '𑒋', '𑒌', '𑒍', '𑒎', '𑒁𑒺', '𑒁𑒽'],
    marks: ['𑒰', '𑒱', '𑒲', '𑒳', '𑒴', '𑒵', '𑒶', '𑒷', '𑒸', '𑒹', '𑒻', '𑒼', '𑒾', '𑒺', '𑒽'],
    virama: s('𑓂'),
    yogavaahas: ['𑓀', '𑓁', '𑒿', 'ᳵ', 'ᳶ', '़'],
    consonants: s(`
        𑒏 𑒐 𑒑 𑒒 𑒓
        𑒔 𑒕 𑒖 𑒗 𑒘
        𑒙 𑒚 𑒛 𑒜 𑒝
        𑒞 𑒟 𑒠 𑒡 𑒢
        𑒣 𑒤 𑒥 𑒦 𑒧
        𑒨 𑒩 𑒪 𑒫
        𑒬 𑒭 𑒮 𑒯
        𑒝𑓃 𑒏𑓂𑒭 𑒖𑓂𑒘
        ऩ 𑒩 ऴ क़ ख़ ग़ ज़ ड़ ढ़ फ़ य़
    `),
    symbols: s(`
        𑓇 𑓄 । ॥
        𑓐 𑓑 𑓒 𑓓 𑓔 𑓕 𑓖 𑓗 𑓘 𑓙
    `),
};


export const TirhutaMaithili = new BrahmicScriptDefinition({
    name: BrahmicScript.TIRHUTA_MAITHILI,
    isRoman: false,
    scheme: TirhutaMaithiliScheme,
});
