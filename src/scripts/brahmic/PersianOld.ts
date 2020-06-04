import { IScriptScheme } from '../base';
import { s } from '../utils';

import { BrahmicScriptDefinition } from './base';
import { BrahmicScript } from '../../enum';


export const PersianOldScheme: IScriptScheme = {
    vowels: ['𐎠', '𐎠', '𐎡', '𐎡', '𐎢', '𐎢', '𐎽𐎢', '𐎽𐎢', '𐎾𐎢', '𐎾𐎢', '𐎡', '𐎠𐎡', '𐎢', '𐎠𐎢', 'ऎ', 'ऒ'],
    marks: ['ा', 'ि', 'ी', 'ु', 'ू', 'ृ', 'ॄ', 'ॢ', 'ॣ', 'े', 'ै', 'ो', 'ौ', 'ॆ', 'ॊ'],
    virama: s(''),
    yogavaahas: ['ं', 'ः', 'ँ', 'ᳵ', 'ᳶ', '़'],
    consonants: s(`
        𐎣 𐎧 𐎥 𐎥 𐎴
        𐎨 𐎨 𐎩 𐎩 𐎴
        𐎫 𐎫 𐎭 𐎭 𐎴
        𐎫 𐎰 𐎭 𐎭 𐎴
        𐎱 𐎱 𐎲 𐎲 𐎶
        𐎹 𐎼 𐎾 𐎺
        𐏁 𐏂 𐎿 𐏃
        𐎾 𐎣𐏂 𐎩𐎴
        ऩ ऱ ऴ क़ ख़ ग़ ज़ ड़ ढ़ फ़ य़
    `),
    symbols: s(`
        𐎢𐎶 ऽ । ॥
        ० 𐏑 𐏒 𐏒𐏑 𐏒𐏒 𐏒𐏒𐏑 𐏒𐏒𐏒 𐏒𐏒𐏒𐏑 𐏒𐏒𐏒𐏒 𐏒𐏒𐏒𐏒𐏑
    `),
};


export const PersianOld = new BrahmicScriptDefinition({
    name: BrahmicScript.PERSIAN_OLD,
    isRoman: false,
    scheme: PersianOldScheme,
});
