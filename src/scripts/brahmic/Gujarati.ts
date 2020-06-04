import { IScriptScheme } from '../base';
import { s } from '../utils';

import { BrahmicScriptDefinition } from './base';
import { BrahmicScript } from '../../enum';


export const GujaratiScheme: IScriptScheme = {
    vowels: s('અ આ ઇ ઈ ઉ ઊ ઋ ૠ ઌ ૡ એ ઐ ઓ ઔ'),
    marks: s('ા િ ી ુ ૂ ૃ ૄ ૢ ૣ ે ૈ ો ૌ'),
    virama: s('્'),
    yogavaahas: s('ં ઃ ઁ ᳵ ᳶ ઼'),
    consonants: s(`
        ક ખ ગ ઘ ઙ
        ચ છ જ ઝ ઞ
        ટ ઠ ડ ઢ ણ
        ત થ દ ધ ન
        પ ફ બ ભ મ
        ય ર લ વ
        શ ષ સ હ
        ળ ક્ષ જ્ઞ
        ન઼ ર઼ ળ઼ ક઼ ખ઼ ગ઼ જ઼ ડ઼ ઢ઼ ફ઼ ય઼
    `),
    symbols: s(`
        ૐ ઽ । ॥
        ૦ ૧ ૨ ૩ ૪ ૫ ૬ ૭ ૮ ૯
    `),
};


export const Gujarati = new BrahmicScriptDefinition({
    name: BrahmicScript.GUJARATI,
    isRoman: false,
    scheme: GujaratiScheme,
});
