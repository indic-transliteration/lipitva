import { IScriptScheme } from '../base';
import { s } from '../utils';

import { BrahmicScriptDefinition } from './base';
import { BrahmicScript } from '../../enum';


export const TeluguScheme: IScriptScheme = {
    vowels: s('అ ఆ ఇ ఈ ఉ ఊ ఋ ౠ ఌ ౡ ఏ ఐ ఓ ఔ ఎ ఒ'),
    marks: s('ా ి ీ ు ూ ృ ౄ ౢ ౣ ే ై ో ౌ ె  ొ'),
    virama: s('్'),
    yogavaahas: s('ం ః ఁ'),
    consonants: s(`
        క ఖ గ ఘ ఙ
        చ ఛ జ ఝ ఞ
        ట ఠ డ ఢ ణ
        త థ ద ధ న
        ప ఫ బ భ మ
        య ర ల వ
        శ ష స హ
        ళ క్ష జ్ఞ
        ऩ ఱ ఴ क़ ఖ ग़ ज़ ड़ ఢ ఫ य़
    `),
    symbols: s(`
        ఓం ఽ । ॥
        ౦ ౧ ౨ ౩ ౪ ౫ ౬ ౭ ౮ ౯
    `),
};


export const Telugu = new BrahmicScriptDefinition({
    name: BrahmicScript.TELUGU,
    isRoman: false,
    scheme: TeluguScheme,
});
