const opaqueRegex = /[\S]+/g;


/**
 * splits string by whitespace
 */
export function s(str: string) {
    return str.match(opaqueRegex) || [''];
}
