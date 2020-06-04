import { IScriptScheme } from '../base';
import { s } from '../utils';

import { BrahmicScriptDefinition } from './base';
import { BrahmicScript } from '../../enum';


export const GranthaScheme: IScriptScheme = {
    vowels: s('𑌅 𑌆 𑌇 𑌈 𑌉 𑌊 𑌋 𑍠 𑌌 𑍡 𑌏 𑌐 𑌓 𑌔 𑌏𑌀 𑌓𑌀'),
    marks: s('𑌾 𑌿 𑍀 𑍁 𑍂 𑍃 𑍄 𑍢 𑍣 𑍇 𑍈 𑍋 𑍗 𑍇𑌀 𑍋𑌀'),
    virama: s('𑍍'),
    yogavaahas: s('𑌂 𑌃 𑌁'),
    consonants: s(`
        𑌕 𑌖 𑌗 𑌘 𑌙
        𑌚 𑌛 𑌜 𑌝 𑌞
        𑌟 𑌠 𑌡 𑌢 𑌣
        𑌤 𑌥 𑌦 𑌧 𑌨
        𑌪 𑌫 𑌬 𑌭 𑌮
        𑌯 𑌰 𑌲 𑌵
        𑌳 𑌕𑍍𑌷 𑌜𑍍𑌞 𑌨𑌼
        𑌰𑌼 𑌳𑌼 ன
        ற ழ
    `),
    symbols: s(`
        𑍐 𑌽 । ॥
        ௦ ௧ ௨ ௩ ௪ ௫ ௬ ௭ ௮ ௯
    `),
};


export const Grantha = new BrahmicScriptDefinition({
    name: BrahmicScript.GRANTHA,
    isRoman: false,
    scheme: GranthaScheme,
});
