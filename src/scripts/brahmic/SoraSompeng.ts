import { IScriptScheme } from '../base';
import { s } from '../utils';

import { BrahmicScriptDefinition } from './base';
import { BrahmicScript } from '../../enum';


export const SoraSompengScheme: IScriptScheme = {
    vowels: ['𑃦𑃨', '𑃢', '𑃤', '𑃤', '𑃥', '𑃥', '𑃝𑃤', '𑃝𑃤', '𑃘𑃤', '𑃘𑃤', '𑃣', '𑃧', '𑃦', '𑃦𑃥', '𑃣', '𑃦'],
    marks: ['𑃢', '𑃤', '𑃤', '𑃥', '𑃥', '𑃝𑃤', '𑃝𑃤', '𑃘𑃤', '𑃘𑃤', '𑃣', '𑃧', '𑃦', '𑃦𑃥', '𑃣', '𑃦'],
    virama: s(''),
    yogavaahas: ['𑃖', '𑃞', '𑃖', 'ᳵ', 'ᳶ', '़'],
    consonants: s(`
        𑃟 𑃟𑃠 𑃕 𑃕𑃠 𑃗
        𑃓 𑃓𑃠 𑃠 𑃠𑃠 𑃡
        𑃑𑃨 𑃑𑃨𑃠 𑃔 𑃔𑃠 𑃙𑃨
        𑃑 𑃑𑃠 𑃔𑃨 𑃔𑃨𑃠 𑃙
        𑃛 𑃛𑃠 𑃒 𑃒𑃠 𑃖
        𑃜 𑃝 𑃘 𑃚
        𑃐𑃠 𑃐𑃨 𑃐 𑃞
        𑃘𑃨 𑃟𑃐𑃨 𑃠𑃡
        ऩ 𑃘 ऴ क़ ख़ ग़ ज़ ड़ ढ़ फ़ य़
    `),
    symbols: s(`
        𑃦𑃖 ' . ..
        𑃰 𑃱 𑃲 𑃳 𑃴 𑃵 𑃶 𑃷 𑃸 𑃹
    `),
};


export const SoraSompeng = new BrahmicScriptDefinition({
    name: BrahmicScript.SORA_SOMPENG,
    isRoman: false,
    scheme: SoraSompengScheme,
});
