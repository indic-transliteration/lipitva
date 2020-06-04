import { IPlainObject } from '../types';

export interface IScriptScheme {
    readonly vowels: string[];
    readonly marks: string[];
    readonly virama: string[];
    readonly yogavaahas: string[];
    readonly consonants: string[];
    readonly symbols: string[];
}


export interface ISynonymMap {
    [lig: string]: string[];
}


export interface IScriptDefinition {
    readonly name: string;
    readonly isRoman: boolean;
    readonly scheme: IScriptScheme;
    readonly synonymMap?: ISynonymMap;
}


export class ScriptDefinition implements IScriptDefinition {
    public readonly name: string;

    public readonly isRoman: boolean;

    public readonly scheme: IScriptScheme;

    public readonly synonymMap: ISynonymMap;

    private propCache: IPlainObject;

    constructor({ name, isRoman, scheme, synonymMap }: IScriptDefinition) {
        this.name = name;
        this.isRoman = isRoman;
        this.scheme = scheme;
        this.synonymMap = synonymMap || {};

        this.propCache = {};
    }

    public get maxKeyLength() : number {
        if (!Object.prototype.hasOwnProperty.call(this.propCache, 'maxKeyLength')) {
            let maxLength = 0;
            Object.keys(this.scheme).forEach((g) => {
                this.scheme[g as keyof IScriptScheme].forEach((x: string) => {
                    maxLength = Math.max(maxLength, x.length);
                });
            });
            this.propCache.maxKeyLength = maxLength;
        }

        return this.propCache.maxKeyLength;
    }
}


export interface IScriptDefinitionsMap {
    [x: string]: ScriptDefinition;
}
