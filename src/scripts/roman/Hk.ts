import { IScriptScheme } from '../base';
import { s } from '../utils';

import { RomanScriptDefinition } from './base';
import { RomanScript } from '../../enum';


export const HkScheme: IScriptScheme = {
    vowels: s('a A i I u U R RR lR lRR e ai o au'),
    marks: s('A i I u U R RR lR lRR e ai o au'),
    virama: s(''),
    yogavaahas: s('M H ~'),
    consonants: s(`
        k kh g gh G
        c ch j jh J
        T Th D Dh N
        t th d dh n
        p ph b bh m
        y r l v
        z S s h
        L kS jJ
        
    `),
    symbols: s(`
        OM ' | ||
        0 1 2 3 4 5 6 7 8 9
    `),
};


export const Hk = new RomanScriptDefinition({
    name: RomanScript.HK,
    isRoman: true,
    scheme: HkScheme,
    synonymMap: { '|': ['.'], '||': ['..'] },
});
