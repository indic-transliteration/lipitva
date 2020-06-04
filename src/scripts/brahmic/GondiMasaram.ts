import { IScriptScheme } from '../base';
import { s } from '../utils';

import { BrahmicScriptDefinition } from './base';
import { BrahmicScript } from '../../enum';


export const GondiMasaramScheme: IScriptScheme = {
    vowels: ['𑴀', '𑴁', '𑴂', '𑴃', '𑴄', '𑴅', '𑴦𑴶', '𑴦𑴵', '𑴧𑴴', '𑴧𑴵', '𑴆', '𑴈', '𑴉', '𑴋', '𑴆', '𑴉'],
    marks: ['𑴱', '𑴲', '𑴳', '𑴴', '𑴵', '𑴶', '𑵅𑴦𑴵', '𑵅𑴧𑴴', '𑵅𑴧𑴵', '𑴺', '𑴼', '𑴽', '𑴿', '𑴺', '𑴽'],
    virama: s('𑵄'),
    yogavaahas: ['𑵀', '𑵁', '𑵀', 'ᳵ', 'ᳶ', '़'],
    consonants: s(`
        𑴌 𑴍 𑴎 𑴏 𑴐
        𑴑 𑴒 𑴓 𑴔 𑴕
        𑴖 𑴗 𑴘 𑴙 𑴚
        𑴛 𑴜 𑴝 𑴞 𑴟
        𑴠 𑴡 𑴢 𑴣 𑴤
        𑴥 𑴦 𑴧 𑴨
        𑴩 𑴪 𑴫 𑴬
        𑴭 𑴌𑵄𑴪 𑴓𑵄𑴕
        ऩ 𑴦𑵂 ऴ क़ ख़ ग़ ज़ ड़ ढ़ फ़ य़
    `),
    symbols: s(`
        𑴉𑵀 ऽ । ॥
        𑵐 𑵑 𑵒 𑵓 𑵔 𑵕 𑵖 𑵗 𑵘 𑵙
    `),
};


export const GondiMasaram = new BrahmicScriptDefinition({
    name: BrahmicScript.GONDI_MASARAM,
    isRoman: false,
    scheme: GondiMasaramScheme,
});
