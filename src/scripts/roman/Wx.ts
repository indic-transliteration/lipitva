import { IScriptScheme } from '../base';
import { s } from '../utils';

import { RomanScriptDefinition } from './base';
import { RomanScript } from '../../enum';


export const WxScheme: IScriptScheme = {
    vowels: s('a A i I u U q Q L ḹ e E o O'),
    marks: s('A i I u U q Q L ḹ e E o O'),
    virama: s(''),
    yogavaahas: s('M H ~'),
    consonants: s(`
        k K g G f
        c C j J F
        t T d D N
        w W x X n
        p P b B m
        y r l v
        S R s h
        ḻ kR jF
        
    `),
    symbols: s(`
        oM ' . ..
        0 1 2 3 4 5 6 7 8 9
    `),
};


export const Wx = new RomanScriptDefinition({
    name: RomanScript.WX,
    isRoman: true,
    scheme: WxScheme,
    synonymMap: { "'": ['Z'], '~': ['z'] },
});
