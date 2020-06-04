import { IScriptScheme } from '../base';
import { s } from '../utils';

import { BrahmicScriptDefinition } from './base';
import { BrahmicScript } from '../../enum';


export const KannadaScheme: IScriptScheme = {
    vowels: s('ಅ ಆ ಇ ಈ ಉ ಊ ಋ ೠ ಌ ೡ ಏ ಐ ಓ ಔ ಎ ಒ'),
    marks: s('ಾ ಿ ೀ ು ೂ ೃ ೄ ೢ ೣ ೇ ೈ ೋ ೌ ೆ ೊ'),
    virama: s('್'),
    yogavaahas: s('ಂ ಃ ಁ ೱ ೲ ಼'),
    consonants: s(`
        ಕ ಖ ಗ ಘ ಙ
        ಚ ಛ ಜ ಝ ಞ
        ಟ ಠ ಡ ಢ ಣ
        ತ ಥ ದ ಧ ನ
        ಪ ಫ ಬ ಭ ಮ
        ಯ ರ ಲ ವ
        ಶ ಷ ಸ ಹ
        ಳ ಕ್ಷ ಜ್ಞ
        ನ಼ ಱ ೞ ಕ಼ ಖ಼ ಗ಼ ಜ಼ ಡ಼ ಢ಼ ಫ಼ ಯ಼
    `),
    symbols: s(`
        ಓಂ ಽ । ॥
        ೦ ೧ ೨ ೩ ೪ ೫ ೬ ೭ ೮ ೯
    `),
};


export const Kannada = new BrahmicScriptDefinition({
    name: BrahmicScript.KANNADA,
    isRoman: false,
    scheme: KannadaScheme,
});
