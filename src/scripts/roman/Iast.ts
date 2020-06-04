import { IScriptScheme } from '../base';
import { s } from '../utils';

import { RomanScriptDefinition } from './base';
import { RomanScript } from '../../enum';


export const IastScheme: IScriptScheme = {
    vowels: s('a ā i ī u ū ṛ ṝ ḷ ḹ e ai o au ê ô'),
    marks: s('ā i ī u ū ṛ ṝ ḷ ḹ e ai o au ê ô'),
    virama: s(''),
    yogavaahas: s('ṃ ḥ m̐'),
    consonants: s(`
        k kh g gh ṅ
        c ch j jh ñ
        ṭ ṭh ḍ ḍh ṇ
        t th d dh n
        p ph b bh m
        y r l v
        ś ṣ s h
        ḻ kṣ jñ
        ṉ r̂ ḽ q k͟h ġ z f ẏ
    `),
    symbols: s(`
        oṃ ' | ||
        0 1 2 3 4 5 6 7 8 9
    `),
};


const synonymMap = {
    '|': ['.', '/'],
    '||': ['..', '//'],
    "'": ['`'],
    m̐: ['ṁ'],
    ṛ: ['r̥'],
    ṝ: ['ṝ', 'r̥̄', 'r̥̄'],
};

[IastScheme.vowels, IastScheme.consonants, ['om']].forEach((group) => {
    group.forEach((x) => {
        let synonyms = [x.toLocaleUpperCase()];
        if (Object.prototype.hasOwnProperty.call(synonymMap, x)) {
            const existingSynonyms = synonymMap[x as keyof typeof synonymMap];
            synonyms = [
                ...synonyms,
                ...existingSynonyms,
                ...(existingSynonyms.map((syn) => syn.toLocaleUpperCase())),
            ];
        }
        synonymMap[x as keyof typeof synonymMap] = synonyms;
    });
});


export const Iast = new RomanScriptDefinition({
    name: RomanScript.IAST,
    isRoman: true,
    scheme: IastScheme,
    synonymMap,
});
