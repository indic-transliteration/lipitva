import { IScriptScheme } from '../base';
import { s } from '../utils';

import { BrahmicScriptDefinition } from './base';
import { BrahmicScript } from '../../enum';


export const JavaneseScheme: IScriptScheme = {
    vowels: ['ꦄ', 'ꦄꦴ', 'ꦆ', 'ꦇ', 'ꦈ', 'ꦈꦴ', 'ꦉ', 'ꦉꦴ', 'ꦊ', 'ꦋ', 'ꦌ', 'ꦍ', 'ꦎ', 'ꦎꦴ', 'ऎ', 'ऒ'],
    marks: ['ꦴ', 'ꦶ', 'ꦷ', 'ꦸ', 'ꦹ', 'ꦽ', '꧀ꦉꦴ', '꧀ꦊ', '꧀ꦋ', 'ꦺ', 'ꦻ', 'ꦺꦴ', 'ꦻꦴ', '', ''],
    virama: s('꧀'),
    yogavaahas: ['ꦁ', 'ꦃ', 'ꦀ', 'ᳵ', 'ᳶ', '़'],
    consonants: s(`
        ꦏ ꦑ ꦒ ꦓ ꦔ
        ꦕ ꦖ ꦗ ꦙ ꦚ
        ꦛ ꦜ ꦝ ꦞ ꦟ
        ꦠ ꦡ ꦢ ꦣ ꦤ
        ꦥ ꦦ ꦧ ꦨ ꦩ
        ꦪ ꦫ ꦭ ꦮ
        ꦯ ꦰ ꦱ ꦲ
        ꦭ꦳ ꦏ꧀ꦰ ꦗ꧀ꦚ
        ऩ ऱ ऴ क़ ख़ ग़ ज़ ड़ ढ़ फ़ य़
    `),
    symbols: s(`
        ꦎꦀ ' । ॥
        ꧐ ꧑ ꧒ ꧓ ꧔ ꧕ ꧖ ꧗ ꧘ ꧙
    `),
};


export const Javanese = new BrahmicScriptDefinition({
    name: BrahmicScript.JAVANESE,
    isRoman: false,
    scheme: JavaneseScheme,
});
