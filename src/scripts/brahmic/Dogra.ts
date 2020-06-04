import { IScriptScheme } from '../base';
import { s } from '../utils';

import { BrahmicScriptDefinition } from './base';
import { BrahmicScript } from '../../enum';


export const DograScheme: IScriptScheme = {
    vowels: ['𑠀', '𑠁', '𑠂', '𑠃', '𑠄', '𑠅', '𑠤𑠭', '𑠤𑠮', '𑠥𑠭', '𑠥𑠮', '𑠆', '𑠇', '𑠈', '𑠉', '𑠆', '𑠈'],
    marks: ['𑠬', '𑠭', '𑠮', '𑠯', '𑠰', '𑠱', '𑠲', '𑠹𑠥𑠭', '𑠹𑠥𑠮', '𑠳', '𑠴', '𑠵', '𑠶', '𑠳', '𑠵'],
    virama: s('𑠹'),
    yogavaahas: ['𑠷', '𑠸', '𑠷', 'ᳵ', 'ᳶ', '़'],
    consonants: s(`
        𑠊 𑠋 𑠌 𑠍 𑠎
        𑠏 𑠐 𑠑 𑠒 𑠓
        𑠔 𑠕 𑠖 𑠗 𑠘
        𑠙 𑠚 𑠛 𑠜 𑠝
        𑠞 𑠟 𑠠 𑠡 𑠢
        𑠣 𑠤 𑠥 𑠦
        𑠧 𑠨 𑠩 𑠪
        𑠥𑠺 𑠊𑠹𑠨 𑠑𑠹𑠓
        ऩ 𑠤𑠺 ऴ क़ ख़ ग़ ज़ ड़ ढ़ फ़ य़
    `),
    symbols: s(`
        𑠈𑠷 ऽ । ॥
        ० १ २ ३ ४ ५ ६ ७ ८ ९
    `),
};


export const Dogra = new BrahmicScriptDefinition({
    name: BrahmicScript.DOGRA,
    isRoman: false,
    scheme: DograScheme,
});
