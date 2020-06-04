import memoize from 'fast-memoize';

import { ScriptDefinition } from './scripts/base';
import { ScriptMap } from './transliterate';


export class ScriptsRegistry extends Map<string, ScriptDefinition> {
    private getScriptMap: (fromScriptName: string, toScriptName: string) => ScriptMap | undefined;

    constructor() {
        super();

        const _this = this;
        // we are defining inside constructor, to create a closure, and to memorize
        const getScriptMap = (from: string, to: string) => {
            const fromScript = _this.get(from);
            const toScript = _this.get(to);
            if (!fromScript || !toScript) return undefined;
            return new ScriptMap({
                fromScript,
                toScript,
            });
        };

        this.getScriptMap = memoize(getScriptMap);
    }

    public register(scriptDefs: ScriptDefinition[]) {
        scriptDefs.forEach((sd) => {
            this.set(sd.name, sd);
        });
    }

    public resolveScriptMap(from?: string, to?: string, scriptMap?: ScriptMap) {
        if (scriptMap) return scriptMap;
        if (!from || !to) throw new Error('from and to script names should be defined values');
        if (!this.has(from) || !this.has(to)) throw new Error(`No script map found for ${from}:${to}`);
        return this.getScriptMap(from, to) as ScriptMap;
    }
}
