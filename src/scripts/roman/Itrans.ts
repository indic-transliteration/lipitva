import { IScriptScheme } from '../base';
import { s } from '../utils';

import { RomanScriptDefinition } from './base';
import { RomanScript } from '../../enum';


export const ItransScheme: IScriptScheme = {
    vowels: s('a A i I u U RRi RRI LLi LLI e ai o au'),
    marks: s('A i I u U RRi RRI LLi LLI e ai o au'),
    virama: s(''),
    yogavaahas: s('M H .N'),
    consonants: s(`
        k kh g gh ~N
        ch Ch j jh ~n
        T Th D Dh N
        t th d dh n
        p ph b bh m
        y r l v
        sh Sh s h
        L kSh j~n
        n2 r2 zh q K G z .D .Dh f य़
    `),
    symbols: s(`
        OM .a | ||
        0 1 2 3 4 5 6 7 8 9
    `),
};


export const Itrans = new RomanScriptDefinition({
    name: RomanScript.ITRANS,
    isRoman: true,
    scheme: ItransScheme,
    synonymMap: {
        A: ['aa'],
        I: ['ii'],
        U: ['uu'],
        e: ['E'],
        o: ['O'],
        RRi: ['R^i'],
        RRI: ['R^I'],
        LLi: ['L^i'],
        LLI: ['L^I'],
        M: ['.m', '.n'],
        v: ['w'],
        kSh: ['x', 'kS'],
        'j~n': ['GY', 'jJN'],
        '||': ['..'],
        '|': ['.'],
    },
});
