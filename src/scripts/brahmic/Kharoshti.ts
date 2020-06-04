import { IScriptScheme } from '../base';
import { s } from '../utils';

import { BrahmicScriptDefinition } from './base';
import { BrahmicScript } from '../../enum';


export const KharoshtiScheme: IScriptScheme = {
    vowels: ['𐨀', '𐨀𐨌', '𐨀𐨁', '𐨀𐨁𐨌', '𐨀𐨂', '𐨀𐨂𐨌', '𐨀𐨃', '𐨀𐨃𐨌', '𐨫𐨂', '𐨫𐨂𐨌', '𐨀𐨅', '𐨀𐨅𐨌', '𐨀𐨆', '𐨀𐨆𐨌', 'ऎ', 'ऒ'],
    marks: ['𐨌', '𐨁', '𐨁𐨌', '𐨂', '𐨂𐨌', '𐨃', '𐨃𐨌', '𐨿𐨫𐨂', '𐨿𐨫𐨂𐨌', '𐨅', '𐨅𐨌', '𐨆', '𐨆𐨌', '', ''],
    virama: s('𐨿'),
    yogavaahas: ['𐨎', '𐨏', '𐨎', 'ᳵ', 'ᳶ', '़'],
    consonants: s(`
        𐨐 𐨑 𐨒 𐨓 𐨣
        𐨕 𐨖 𐨗 𐨗 𐨙
        𐨚 𐨛 𐨜 𐨝 𐨞
        𐨟 𐨠 𐨡 𐨢 𐨣
        𐨤 𐨥 𐨦 𐨧 𐨨
        𐨩 𐨪 𐨫 𐨬
        𐨭 𐨮 𐨯 𐨱
        𐨫 𐨐𐨿𐨮 𐨗𐨿𐨙
        ऩ ऱ ऴ क़ ख़ ग़ ज़ ड़ ढ़ फ़ य़
    `),
    symbols: s(`
        𐨀𐨅𐨎 ऽ । ॥
        ० 𐩀 𐩁 𐩂 𐩃 𐩃𐩀 𐩃𐩁 𐩃𐩂 𐩃𐩃 𐩃𐩃𐩀
    `),
};


export const Kharoshti = new BrahmicScriptDefinition({
    name: BrahmicScript.KHAROSHTI,
    isRoman: false,
    scheme: KharoshtiScheme,
});
