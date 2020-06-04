import { IScriptScheme } from '../base';
import { s } from '../utils';

import { RomanScriptDefinition } from './base';
import { RomanScript } from '../../enum';


export const Slp1Scheme: IScriptScheme = {
    vowels: s('a A i I u U f F x X e E o O'),
    marks: s('A i I u U f F x X e E o O'),
    virama: s(''),
    yogavaahas: s('M H ~'),
    consonants: s(`
        k K g G N
        c C j J Y
        w W q Q R
        t T d D n
        p P b B m
        y r l v
        S z s h
        L kz jY
        
    `),
    symbols: s(`
        oM ' . ..
        0 1 2 3 4 5 6 7 8 9
    `),
};


export const Slp1 = new RomanScriptDefinition({
    name: RomanScript.SLP1,
    isRoman: true,
    scheme: Slp1Scheme,
});
