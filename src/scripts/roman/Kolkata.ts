import { IScriptScheme } from '../base';
import { s } from '../utils';

import { RomanScriptDefinition } from './base';
import { RomanScript } from '../../enum';


export const KolkataScheme: IScriptScheme = {
    vowels: s('a ā i ī u ū ṛ ṝ ḷ ḹ ē ai ō au ê ô'),
    marks: s('ā i ī u ū ṛ ṝ ḷ ḹ ē ai ō au ê ô'),
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


export const Kolkata = new RomanScriptDefinition({
    name: RomanScript.KOLKATA,
    isRoman: true,
    scheme: KolkataScheme,
});
