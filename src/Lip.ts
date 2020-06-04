import { ScriptsRegistry } from './registry';
import { ITransliterationOptions, ScriptMap, transliterate } from './transliterate';
import { transliterateElem } from './transliterate-elem';


export interface ITArgs extends ITransliterationOptions { // 't' method args interface
    data: string;
    from?: string;
    to?: string;
    scriptMap?: ScriptMap;
}

export interface ITEArgs extends ITransliterationOptions { // 'te' method args interface
    elem: HTMLElement,
    from?: string;
    to?: string;
    recursive?: boolean;
    scriptMap?: ScriptMap;
}

/**
 * A convenient OOP interface for functional tools like `transliterate`, etc.
 */
export class Lip {
    public registry: ScriptsRegistry;

    constructor(registry: ScriptsRegistry) {
        this.registry = registry;
    }

    /**
     * transliterate data from one script to other.
     */
    public t({ data, from, to, scriptMap, ...kw }: ITArgs) {
        return transliterate({
            data,
            scriptMap: this.registry.resolveScriptMap(from, to, scriptMap),
            ...kw,
        });
    }

    /**
     * transliterates an element's content.
     */
    public te({ elem, from, to, scriptMap, recursive, ...kw }: ITEArgs) {
        return transliterateElem({
            elem,
            scriptMap: this.registry.resolveScriptMap(from, to, scriptMap),
            recursive,
            ...kw,
        });
    }
}
