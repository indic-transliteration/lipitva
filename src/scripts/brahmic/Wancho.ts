import { IScriptScheme } from '../base';
import { s } from '../utils';

import { BrahmicScriptDefinition } from './base';
import { BrahmicScript } from '../../enum';


export const WanchoScheme: IScriptScheme = {
    vowels: ['𞋁', '𞋀', '𞋜', '𞋜', '𞋞', '𞋞', '𞋗𞋞', '𞋗𞋞', '𞋈𞋞', '𞋈𞋞', '𞋛', '𞋀𞋜', '𞋕', '𞋖', '𞋛', '𞋕'],
    marks: ['𞋀', '𞋜', '𞋜', '𞋞', '𞋞', '𞋗𞋞', '𞋗𞋞', '𞋈𞋞', '𞋈𞋞', '𞋛', '𞋀𞋜', '𞋕', '𞋖', '𞋛', '𞋕'],
    virama: s(''),
    yogavaahas: ['𞋝', '𞋫', '𞋉', 'ᳵ', 'ᳶ', '़'],
    consonants: s(`
        𞋔𞋁 𞋙𞋁 𞋅𞋁 𞋅𞋁 𞋝𞋁
        𞋃𞋁 𞋃𞋁 𞋐𞋁 𞋐𞋁 𞋩𞋁
        𞋋𞋁 𞋌𞋁 𞋄𞋁 𞋄𞋁 𞋉𞋁
        𞋋𞋁 𞋌𞋁 𞋄𞋁 𞋄𞋁 𞋉𞋁
        𞋊𞋁 𞋇𞋁 𞋂𞋁 𞋂𞋁 𞋘𞋁
        𞋆𞋁 𞋗𞋁 𞋈𞋁 𞋓𞋁
        𞋏𞋁 𞋏𞋁 𞋎𞋁 𞋚𞋁
        𞋟𞋁 𞋔𞋁𞋏𞋁 𞋐𞋁𞋩𞋁
        ऩ 𞋗𞋁 ऴ क़ ख़ ग़ ज़ ड़ ढ़ फ़ य़
    `),
    symbols: s(`
        𞋦 ऽ . ..
        𞋰 𞋱 𞋲 𞋳 𞋴 𞋵 𞋶 𞋷 𞋸 𞋹
    `),
};


export const Wancho = new BrahmicScriptDefinition({
    name: BrahmicScript.WANCHO,
    isRoman: false,
    scheme: WanchoScheme,
});
