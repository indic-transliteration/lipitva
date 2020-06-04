import { ITransliterationOptions, ScriptMap, transliterate } from './transliterate';


export interface ITransliterateElemArgs extends ITransliterationOptions {
    elem: HTMLElement;
    recursive?: boolean;
    scriptMap: ScriptMap;
}

export function transliterateElem({ elem, scriptMap, recursive, ...kwargs }: ITransliterateElemArgs) {
    const { childNodes } = elem;
    childNodes.forEach((node) => {
        if (node.nodeType === 3) {
            if (!elem.translate) return;
            const data = node.textContent;
            if (!data) return;
            node.replaceWith(
                transliterate({
                    data,
                    scriptMap,
                    ...kwargs,
                }),
            );
            return;
        }
        if (!recursive) return;
        transliterateElem({
            elem: node as HTMLElement, scriptMap, recursive, ...kwargs,
        });
    });
}
