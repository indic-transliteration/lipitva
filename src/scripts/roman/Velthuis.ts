import { IScriptScheme } from '../base';
import { s } from '../utils';

import { RomanScriptDefinition } from './base';
import { RomanScript } from '../../enum';


export const VelthuisScheme: IScriptScheme = {
    vowels: s('a aa i ii u uu .r .rr .l .ll e ai o au'),
    marks: s('aa i ii u uu .r .rr .l .ll e ai o au'),
    virama: s(''),
    yogavaahas: s('.m .h /'),
    consonants: s(`
        k kh g gh "n
        c ch j jh ~n
        .t .th .d .dh .n
        t th d dh n
        p ph b bh m
        y r l v
        "s .s s h
        L k.s j~n
        
    `),
    symbols: s(`
        O .a | ||
        0 1 2 3 4 5 6 7 8 9
    `),
};


export const Velthuis = new RomanScriptDefinition({
    name: RomanScript.VELTHUIS,
    isRoman: true,
    scheme: VelthuisScheme,
});
