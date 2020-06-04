export enum BrahmicScript {
    ASSAMESE = 'assamese',
    AHOM = 'ahom',
    AVESTAN = 'avestan',
    BALINESE = 'balinese',
    BENGALI = 'bengali', //
    BRAHMI = 'brahmi',
    BRAHMI_TAMIL = 'brahmi_tamil',
    BHAISUKI = 'bhaisuki',
    BURMESE = 'burmese',
    CHAKMA = 'chakma',
    CHAM = 'cham',
    CYRILLIC = 'cyrillic',
    DEVANAGARI = 'devanagari', //
    DOGRA = 'dogra',
    GONDI_GUNJALA = 'gondi_gunjala', //
    GONDI_MASARAM = 'gondi_masaram',
    GRANTHA = 'grantha', //
    GRANTHA_PANDYA = 'grantha_pandya',
    GUJARATI = 'gujarati', //
    GURUMUKHI = 'gurumukhi', //
    JAVANESE = 'javanese',
    KANNADA = 'kannada', //
    KHAMTI_SHAN = 'khamti_shan',
    KHAROSHTI = 'kharoshti',
    KHMER = 'khmer',
    KHOM_THAI = 'khom_thai',
    KHUDAWADI = 'khudawadi',
    LAO = 'lao',
    LAO_PALI = 'lao_pali',
    LEPCHA = 'lepcha',
    LIMBU = 'limbu',
    MAHAJANI = 'mahajani',
    MALAYALAM = 'malayalam', //
    MARCHEN = 'marchen',
    MANIPURI = 'manipuri',
    MODI = 'modi',
    MON = 'mon',
    MRO = 'mro',
    MULTANI = 'multani',
    NEWA = 'newa',
    OL_CHIKI = 'ol_chiki',
    ORIYA = 'oriya', //
    PERSIAN_OLD = 'persian_old',
    PHAGS_PA = 'phags_pa',
    RANJANA = 'ranjana',
    REJANG = 'rejang',
    ROHINGYA = 'rohingya',
    SHAN = 'shan',
    SHARADA = 'sharada',
    SIDDHAM = 'siddham',
    SINHALA = 'sinhala',
    SORA_SOMPENG = 'sora_sompeng',
    SUNDANESE = 'sundanese',
    SYLOTI_NAGARI = 'syloti_nagari',
    TAGALOG = 'tagalog',
    TAGBANWA = 'tagbanwa',
    TAI_LAING = 'tai_laing',
    TAKRI = 'takri',
    TAMIL = 'tamil', //
    TAMIL_EXTENDED = 'tamil_extended',
    TAMIL_SUPERSCRIPTED = 'tamil_superscripted',
    TELUGU = 'telugu', //
    THAI = 'thai',
    TIBETAN = 'tibetan',
    TIRHUTA_MAITHILI = 'tirhuta_maithili',
    URDU = 'urdu',
    VATTELUTU = 'vattelutu',
    WANCHO = 'wancho',
    WARANG_CITI = 'warang_citi',
    ZANBAZAR_SQUARE = 'zanbazar_square',
}


export enum RomanScript {
    HK = 'hk',
    IAST = 'iast',
    ITRANS = 'itrans',
    KOLKATA = 'kolkata',
    SLP1 = 'slp1',
    TITUS = 'titus',
    VELTHUIS = 'velthuis',
    WX = 'wx',
}

/**
 * merging two enums
 * @see https://stackoverflow.com/a/55827534/5925119
 */
export const Script = { ...BrahmicScript, ...RomanScript };
export type Script = typeof Script;


/**
 * following are iterable arrays
 */
export const BrahmicScripts = Object.keys(BrahmicScript).map((script) => BrahmicScript[script as keyof typeof BrahmicScript]);

export const RomanScripts = Object.keys(RomanScript).map((script) => RomanScript[script as keyof typeof RomanScript]);

export const Scripts = Object.keys(Script).map((action) => Script[action as keyof typeof Script]);
