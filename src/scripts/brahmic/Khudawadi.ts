import { IScriptScheme } from '../base';
import { s } from '../utils';

import { BrahmicScriptDefinition } from './base';
import { BrahmicScript } from '../../enum';


export const KhudawadiScheme: IScriptScheme = {
    vowels: ['𑊰', '𑊱', '𑊲', '𑊳', '𑊴', '𑊵', '𑋙𑋡', '𑋙𑋢', '𑋚𑋡', '𑋚𑋢', '𑊶', '𑊷', '𑊸', '𑊹', 'ऎ', 'ऒ'],
    marks: ['𑋠', '𑋡', '𑋢', '𑋣', '𑋤', '𑋪𑋙𑋡', '𑋪𑋙𑋢', '𑋪𑋚𑋡', '𑋪𑋚𑋢', '𑋥', '𑋦', '𑋧', '𑋨', '', ''],
    virama: s('𑋪'),
    yogavaahas: ['𑋟', '𑋞𑋪', '𑋟', 'ᳵ', 'ᳶ', '़'],
    consonants: s(`
        𑊺 𑊻 𑊼 𑊾 𑊿
        𑋀 𑋁 𑋂 𑋄 𑋅
        𑋆 𑋇 𑋈 𑋋 𑋌
        𑋍 𑋎 𑋏 𑋐 𑋑
        𑋒 𑋓 𑋔 𑋖 𑋗
        𑋘 𑋙 𑋚 𑋛
        𑋜 𑋜𑋩 𑋝 𑋞
        𑋚𑋩 𑊺𑋪𑋜𑋩 𑋂𑋪𑋅
        ऩ ऱ ऴ क़ ख़ ग़ ज़ ड़ ढ़ फ़ य़
    `),
    symbols: s(`
        𑊸𑋟 ऽ । ॥
        𑋰 𑋱 𑋲 𑋳 𑋴 𑋵 𑋶 𑋷 𑋸 𑋹
    `),
};


export const Khudawadi = new BrahmicScriptDefinition({
    name: BrahmicScript.KHUDAWADI,
    isRoman: false,
    scheme: KhudawadiScheme,
});
