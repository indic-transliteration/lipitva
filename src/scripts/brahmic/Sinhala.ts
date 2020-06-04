import { IScriptScheme } from '../base';
import { s } from '../utils';

import { BrahmicScriptDefinition } from './base';
import { BrahmicScript } from '../../enum';


export const SinhalaScheme: IScriptScheme = {
    vowels: ['අ', 'ආ', 'ඉ', 'ඊ', 'උ', 'ඌ', 'ඍ', 'ඎ', 'ඏ', 'ඐ', 'ඒ', 'ඓ', 'ඕ', 'ඖ', 'එ', 'ඔ'],
    marks: ['ා', 'ි', 'ී', 'ු', 'ූ', 'ෘ', 'ෲ', 'ෟ', 'ෳ', 'ේ', 'ෛ', 'ෝ', 'ෞ', 'ෙ', 'ො'],
    virama: s('්'),
    yogavaahas: ['ං', 'ඃ', 'ං', 'ᳵ', 'ᳶ', '़'],
    consonants: s(`
        ක ඛ ග ඝ ඞ
        ච ඡ ජ ඣ ඤ
        ට ඨ ඩ ඪ ණ
        ත ථ ද ධ න
        ප ඵ බ භ ම
        ය ර ල ව
        ශ ෂ ස හ
        ළ ක්ෂ ජ්ඤ
        ऩ ර ऴ क़ ख़ ग़ ज़ ड़ ढ़ फ़ य़
    `),
    symbols: s(`
        ඕං (අ) . ..
        0 1 2 3 4 5 6 7 8 9
    `),
};


export const Sinhala = new BrahmicScriptDefinition({
    name: BrahmicScript.SINHALA,
    isRoman: false,
    scheme: SinhalaScheme,
});
