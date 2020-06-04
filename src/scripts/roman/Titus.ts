import { IScriptScheme } from '../base';
import { s } from '../utils';

import { RomanScriptDefinition } from './base';
import { RomanScript } from '../../enum';


export const TitusScheme: IScriptScheme = {
    vowels: s('a ā i ī u ū r̥ r̥̄ l̥ l̥̄ e ai o au'),
    marks: s('ā i ī u ū r̥ r̥̄ l̥ l̥̄ e ai o au'),
    virama: s(''),
    yogavaahas: s('ṃ ḥ m̐'),
    consonants: s(`
        k kʰ g gʰ ṅ
        c cʰ j jʰ ñ
        ṭ ṭʰ ḍ ḍʰ ṇ
        t tʰ d dʰ n
        p pʰ b bʰ m
        y r l v
        ś ṣ s h
        ḷ kṣ jñ
        
    `),
    symbols: s(`
        oṃ ' . ..
        0 1 2 3 4 5 6 7 8 9
    `),
};


export const Titus = new RomanScriptDefinition({
    name: RomanScript.TITUS,
    isRoman: true,
    scheme: TitusScheme,
    synonymMap: {
        m̐: ['ṁ'],
        r̥: ['ṛ'],
        r̥̄: ['ṝ', 'ṝ', 'r̥̄'],
        oṃ: ['ŏṃ'],
        '.': ['|', '/'],
        '..': ['||', '//'],
    },
});
