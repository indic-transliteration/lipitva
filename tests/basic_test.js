const test = require('tape');

const lip = require('../dist').default;
const { BrahmicScripts, BrahmicScript, RomanScripts, Scripts, Script } = require('../dist/enum');
const { s } = require('../dist/scripts/utils');


const DATA = {
    [Script.BENGALI]: {
        vowels: 'অ আ ই ঈ উ ঊ ঋ ৠ ঌ ৡ এ ঐ ও ঔ',
        marks: 'ক খা গি ঘী ঙু চূ ছৃ জৄ ঝৢ ঞৣ টে ঠৈ ডো ঢৌ ণং তঃ থ্',
        consonants: `ক খ গ ঘ ঙ চ ছ জ ঝ ঞ ট ঠ ড ঢ ণ ত থ দ ধ ন প ফ ব ভ ম
        য র ল ব শ ষ স হ ळ`,
        symbols: 'ॐ । ॥ ০ ১ ২ ৩ ৪ ৫ ৬ ৭ ৮ ৯',
        putra: 'পুত্র',
        naraIti: 'নর ইতি',
        sentence: 'ধর্মক্ষেত্রে কুরুক্ষেত্রে সমবেতা যুযুত্সবঃ ।',
    },

    [Script.DEVANAGARI]: {
        vowels: 'अ आ इ ई उ ऊ ऋ ॠ ऌ ॡ ए ऐ ओ औ',
        marks: 'क खा गि घी ङु चू छृ जॄ झॢ ञॣ टे ठै डो ढौ णं तः थ्',
        consonants: `क ख ग घ ङ च छ ज झ ञ ट ठ ड ढ ण त थ द ध न प फ ब भ म
        य र ल व श ष स ह ळ`,
        symbols: 'ॐ । ॥ ० १ २ ३ ४ ५ ६ ७ ८ ९',
        putra: 'पुत्र',
        naraIti: 'नर इति',
        sentence: 'धर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः ।',
    },

    [Script.GUJARATI]: {
        vowels: 'અ આ ઇ ઈ ઉ ઊ ઋ ૠ ઌ ૡ એ ઐ ઓ ઔ',
        marks: 'ક ખા ગિ ઘી ઙુ ચૂ છૃ જૄ ઝૢ ઞૣ ટે ઠૈ ડો ઢૌ ણં તઃ થ્',
        consonants: `ક ખ ગ ઘ ઙ ચ છ જ ઝ ઞ ટ ઠ ડ ઢ ણ ત થ દ ધ ન પ ફ બ ભ મ
        ય ર લ વ શ ષ સ હ ળ`,
        symbols: 'ૐ । ॥ ૦ ૧ ૨ ૩ ૪ ૫ ૬ ૭ ૮ ૯',
        putra: 'પુત્ર',
        naraIti: 'નર ઇતિ',
        sentence: 'ધર્મક્ષેત્રે કુરુક્ષેત્રે સમવેતા યુયુત્સવઃ ।',
    },

    [Script.TITUS]: {
        vowels: 'a ā i ī u ū r̥ r̥̄ l̥ l̥̄ e ai o au',
        marks: 'ka kʰā gi gʰī ṅu cū cʰr̥ jr̥̄ jʰl̥ ñl̥̄ ṭe ṭʰai ḍo ḍʰau ṇaṃ taḥ tʰ',
        consonants: `ka kʰa ga gʰa ṅa ca cʰa ja jʰa ña ṭa ṭʰa ḍa ḍʰa ṇa ta tʰa da dʰa na pa pʰa ba bʰa ma
        ya ra la va śa ṣa sa ha ḷa`,
        symbols: 'oṃ . .. 0 1 2 3 4 5 6 7 8 9',
        putra: 'putra',
        naraIti: 'nara iti',
        sentence: 'dʰarmakṣetre kurukṣetre samavetā yuyutsavaḥ .',
    },

    [Script.HK]: {
        vowels: 'a A i I u U R RR lR lRR e ai o au',
        marks: `ka khA gi ghI Gu cU chR jRR jhlR JlRR Te Thai Do Dhau
        NaM taH th`,
        consonants: `ka kha ga gha Ga ca cha ja jha Ja Ta Tha Da Dha Na
        ta tha da dha na pa pha ba bha ma
        ya ra la va za Sa sa ha La`,
        symbols: 'OM | || 0 1 2 3 4 5 6 7 8 9',
        putra: 'putra',
        naraIti: 'nara iti',
        sentence: 'dharmakSetre kurukSetre samavetA yuyutsavaH |',
    },

    [Script.ITRANS]: {
        vowels: 'a A i I u U RRi RRI LLi LLI e ai o au',
        marks: `ka khA gi ghI ~Nu chU ChRRi jRRI jhLLi ~nLLI Te Thai Do Dhau
        NaM taH th`,
        consonants: `ka kha ga gha ~Na cha Cha ja jha ~na Ta Tha Da Dha Na
        ta tha da dha na pa pha ba bha ma
        ya ra la va sha Sha sa ha La`,
        symbols: 'OM | || 0 1 2 3 4 5 6 7 8 9',
        putra: 'putra',
        naraIti: 'nara iti',
        sentence: 'dharmakShetre kurukShetre samavetA yuyutsavaH |',
    },

    [Script.VELTHUIS]: {
        vowels: 'a aa i ii u uu .r .rr .l .ll e ai o au',
        marks: `ka khaa gi ghii "nu cuu ch.r j.rr jh.l ~n.ll.te.thai.do.dhau
                .na.m ta.h th`,
        consonants: `ka kha ga gha "na ca cha ja jha ~na.ta.tha.da.dha.na
        ta tha da dha na pa pha ba bha ma
        ya ra la va "sa .sa sa ha La`,
        symbols: 'O | || 0 1 2 3 4 5 6 7 8 9',
        putra: 'putra',
        naraIti: 'nara iti',
        sentence: 'dharmak.setre kuruk.setre samavetaa yuyutsava.h |',
    },

    [Script.IAST]: {
        vowels: 'a ā i ī u ū ṛ ṝ ḷ ḹ e ai o au',
        marks: 'ka khā gi ghī ṅu cū chṛ jṝ jhḷ ñḹ ṭe ṭhai ḍo ḍhau ṇaṃ taḥ th',
        consonants: `ka kha ga gha ṅa ca cha ja jha ña ṭa ṭha ḍa ḍha ṇa
        ta tha da dha na pa pha ba bha ma
        ya ra la va śa ṣa sa ha ḻa`,
        symbols: 'oṃ | || 0 1 2 3 4 5 6 7 8 9',
        putra: 'putra',
        naraIti: 'nara iti',
        sentence: 'dharmakṣetre kurukṣetre samavetā yuyutsavaḥ |',
    },

    [Script.KOLKATA]: {
        vowels: 'a ā i ī u ū ṛ ṝ ḷ ḹ ē ai ō au',
        marks: 'ka khā gi ghī ṅu cū chṛ jṝ jhḷ ñḹ ṭē ṭhai ḍō ḍhau ṇaṃ taḥ th',
        consonants: `ka kha ga gha ṅa ca cha ja jha ña ṭa ṭha ḍa ḍha ṇa
        ta tha da dha na pa pha ba bha ma
        ya ra la va śa ṣa sa ha ḻa`,
        symbols: 'oṃ | || 0 1 2 3 4 5 6 7 8 9',
        putra: 'putra',
        naraIti: 'nara iti',
        sentence: 'dharmakṣētrē kurukṣētrē samavētā yuyutsavaḥ |',
    },

    [Script.KANNADA]: {
        vowels: 'ಅ ಆ ಇ ಈ ಉ ಊ ಋ ೠ ಌ ೡ ಏ ಐ ಓ ಔ',
        marks: 'ಕ ಖಾ ಗಿ ಘೀ ಙು ಚೂ ಛೃ ಜೄ ಝೢ ಞೣ ಟೇ ಠೈ ಡೋ ಢೌ ಣಂ ತಃ ಥ್',
        consonants: `ಕ ಖ ಗ ಘ ಙ ಚ ಛ ಜ ಝ ಞ ಟ ಠ ಡ ಢ ಣ ತ ಥ ದ ಧ ನ ಪ ಫ ಬ ಭ ಮ
        ಯ ರ ಲ ವ ಶ ಷ ಸ ಹ ಳ`,
        symbols: 'ಓಂ । ॥ ೦ ೧ ೨ ೩ ೪ ೫ ೬ ೭ ೮ ೯',
        putra: 'ಪುತ್ರ',
        naraIti: 'ನರ ಇತಿ',
        sentence: 'ಧರ್ಮಕ್ಷೇತ್ರೇ ಕುರುಕ್ಷೇತ್ರೇ ಸಮವೇತಾ ಯುಯುತ್ಸವಃ ।',
    },

    [Script.MALAYALAM]: {
        vowels: 'അ ആ ഇ ഈ ഉ ഊ ഋ ൠ ഌ ൡ ഏ ഐ ഓ ഔ',
        marks: 'ക ഖാ ഗി ഘീ ങു ചൂ ഛൃ ജൄ ഝൢ ഞൣ ടേ ഠൈ ഡോ ഢൌ ണം തഃ ഥ്',
        consonants: `ക ഖ ഗ ഘ ങ ച ഛ ജ ഝ ഞ ട ഠ ഡ ഢ ണ ത ഥ ദ ധ ന പ ഫ ബ ഭ മ
        യ ര ല വ ശ ഷ സ ഹ ള`,
        symbols: 'ഓം । ॥ ൦ ൧ ൨ ൩ ൪ ൫ ൬ ൭ ൮ ൯',
        putra: 'പുത്ര',
        naraIti: 'നര ഇതി',
        sentence: 'ധര്മക്ഷേത്രേ കുരുക്ഷേത്രേ സമവേതാ യുയുത്സവഃ ।',
    },

    [Script.SLP1]: {
        vowels: 'a A i I u U f F x X e E o O',
        marks: 'ka KA gi GI Nu cU Cf jF Jx YX we WE qo QO RaM taH T',
        consonants: `ka Ka ga Ga Na ca Ca ja Ja Ya wa Wa qa Qa Ra
        ta Ta da Da na pa Pa ba Ba ma
        ya ra la va Sa za sa ha La`,
        symbols: 'oM . .. 0 1 2 3 4 5 6 7 8 9',
        putra: 'putra',
        naraIti: 'nara iti',
        sentence: 'Darmakzetre kurukzetre samavetA yuyutsavaH .',
    },

    [Script.WX]: {
        vowels: 'a A i I u U q Q L ḹ e E o O',
        marks: 'ka KA gi GI fu cU Cq jQ JL Fḹ te TE do DO NaM waH W',
        consonants: `ka Ka ga Ga fa ca Ca ja Ja Fa ta Ta da Da Na
        wa Wa xa Xa na pa Pa ba Ba ma
        ya ra la va Sa Ra sa ha ḻa`,
        symbols: 'oM . .. 0 1 2 3 4 5 6 7 8 9',
        putra: 'puwra',
        naraIti: 'nara iwi',
        sentence: 'XarmakRewre kurukRewre samavewA yuyuwsavaH .',
    },

    [Script.TELUGU]: {
        vowels: 'అ ఆ ఇ ఈ ఉ ఊ ఋ ౠ ఌ ౡ ఏ ఐ ఓ ఔ',
        marks: 'క ఖా గి ఘీ ఙు చూ ఛృ జౄ ఝౢ ఞౣ టే ఠై డో ఢౌ ణం తః థ్',
        consonants: `క ఖ గ ఘ ఙ చ ఛ జ ఝ ఞ ట ఠ డ ఢ ణ త థ ద ధ న ప ఫ బ భ మ
        య ర ల వ శ ష స హ ళ`,
        symbols: 'ఓం । ॥ ౦ ౧ ౨ ౩ ౪ ౫ ౬ ౭ ౮ ౯',
        putra: 'పుత్ర',
        naraIti: 'నర ఇతి',
        sentence: 'ధర్మక్షేత్రే కురుక్షేత్రే సమవేతా యుయుత్సవః ।',
    },

    [Script.GONDI_GUNJALA]: {
        vowels: '𑵠 𑵡 𑵢 𑵣 𑵤 𑵥 ఋ ౠ ఌ ౡ 𑵧 𑵨 𑵪 𑵫',
        marks: '𑵱 𑵲𑶊 𑵶𑶋 𑵷𑶌 𑶄𑶍 𑵻𑶎 𑵼ృ 𑶀ౄ 𑶁ౢ ఞౣ 𑵽𑶐 𑵾𑶑 𑶂𑶓 𑶃𑶔 𑵿𑶕 𑵳𑶖 𑵴𑶗',
        consonants: `𑵱 𑵲 𑵶 𑵷 𑶄 𑵻 𑵼 𑶀 𑶁 ఞ 𑵽 𑵾 𑶂 𑶃 𑵿 𑵳 𑵴 𑵸 𑵹 𑵺 𑶅 𑶆 𑵮 𑵯 𑵰
        𑵬 𑶈 𑵵 𑵭 శ ష 𑶉 𑶇 ళ`,
        symbols: '𑶘 । ॥ 𑶠 𑶡 𑶢 𑶣 𑶤 𑶥 𑶦 𑶧 𑶨 𑶩',
        putra: '𑶅𑶍𑵳𑶗𑶈',
        naraIti: '𑵺𑶈 𑵢𑵳𑶋',
        sentence: '𑵹𑶈𑶗𑵰𑵱𑶗ష𑶐𑵳𑶗𑶈𑶐 𑵱𑶍𑶈𑶍𑵱𑶗ష𑶐𑵳𑶗𑶈𑶐 𑶉𑵰𑵭𑶐𑵳𑶊 𑵬𑶍𑵬𑶍𑵳𑶗𑶉𑵭𑶖 ।',
    },

};


/**
 * Compare data for `from` and `to` in the test group `group`
 * @param {string} from
 * @param {string} to
 * @param {string} group
 */
function compareGroup(from, to, group, t) {
    const source = DATA[from][group];
    const expected = s(DATA[to][group]).join(' ');
    const actual = s(lip.t({ data: source, from, to })).join(' ');
    t.equal(actual, expected, `${from} to ${to}: expected ${expected}, got ${actual}`);
}


/**
 * Compare all data for `from` and `to`
 * @param {string} from
 * @param {string} to
 */
function compareAllDataBetweenSchemes(from, to, t) {
    if (!DATA[from] || !DATA[t]) return;
    Object.keys(DATA[from]).forEach((group) => {
        if (Object.prototype.hasOwnProperty.call(DATA[to], group)) {
            compareGroup(from, to, group, t);
        }
    });
}


test('Test that a scheme is roman if `isRoman`', (t) => {
    Scripts.forEach((scriptName) => {
        t.ok(
            // @ts-ignore
            lip.registry.get(scriptName).isRoman === RomanScripts.includes(scriptName),
            `valid isRoman for script ${scriptName},`,
        );
    });
    t.end();
});


test('correspondence: Test that schemes correspond to a subset of devanagari', (t) => {
    const dev = lip.registry.get(Script.DEVANAGARI);
    const groups = new Set(Object.keys(dev.scheme));

    lip.registry.forEach((scriptDef) => {
        Object.keys(scriptDef.scheme).forEach((group) => {
            t.ok(groups.has(group), `${scriptDef.name} has group ${group}`);
        });
    });
    t.end();
});


test('to roman: Test roman to roman', (t) => {
    RomanScripts.forEach((from) => {
        RomanScripts.forEach((to) => {
            t.test(`roman to roman: ${from}:${to}`, (st) => {
                compareAllDataBetweenSchemes(from, to, st);
                st.end();
            });
        });
    });
    t.end();
});


test('to brahmic: Test roman to brahmic', (t) => {
    RomanScripts.forEach((from) => {
        BrahmicScripts.forEach((to) => {
            t.test(`roman to brahmic: ${from}:${to}`, (st) => {
                compareAllDataBetweenSchemes(from, to, st);
                st.end();
            });
        });
    });
    t.end();
});


test('devanagari equivalence: Test all synonomous transliterations', (t) => {
    t.equals(
        lip.t({
            data: 'rAmo gUDhaM vaktI~Ngitaj~naH kShetre',
            from: Script.ITRANS,
            to: Script.DEVANAGARI,
        }),
        lip.t({
            data: 'raamo guuDhaM vaktii~NgitaGYaH xetre',
            from: Script.ITRANS,
            to: Script.DEVANAGARI,
        }),
    );
    t.end();
});


test('Test brahmic to roman', (t) => {
    RomanScripts.forEach((to) => {
        compareAllDataBetweenSchemes(Script.DEVANAGARI, to, t);
    });
    t.end();
});


test('Test brahmic to brahmic', (t) => {
    BrahmicScripts.forEach((to) => {
        compareAllDataBetweenSchemes(Script.DEVANAGARI, to, t);
    });
    t.end();
});


test('Test vowel to mark map', (t) => {
    BrahmicScripts.forEach((script) => {
        if ([BrahmicScript.PERSIAN_OLD, BrahmicScript.CHAM, BrahmicScript.TAKRI, BrahmicScript.MAHAJANI, BrahmicScript.MULTANI, BrahmicScript.SYLOTI_NAGARI].includes(script)) {
            // These scripts are exceptional here as they have same char for different vowels, and are not candidates for this test
            return;
        }
        t.test(`vowel to mark map: ${script}`, (st) => {
            const scriptDef = lip.registry.get(script);
            st.equals(
                // @ts-ignore
                scriptDef.vowelToMarkMap[lip.t({ data: 'अ', from: Script.DEVANAGARI, to: script })],
                '',
            );

            st.equals(
                // @ts-ignore
                scriptDef.vowelToMarkMap[lip.t({ data: 'आ', from: Script.DEVANAGARI, to: script })],
                lip.t({ data: 'ा', from: Script.DEVANAGARI, to: script }),
            );

            const dev = lip.registry.get(Script.DEVANAGARI);

            s('इ ई उ ऊ ए ऐ ओ औ').forEach((vowel) => {
                st.equals(
                    // @ts-ignore
                    scriptDef.vowelToMarkMap[lip.t({ data: vowel, from: Script.DEVANAGARI, to: script })],
                    // @ts-ignore
                    lip.t({ data: dev.vowelToMarkMap[vowel], from: Script.DEVANAGARI, to: script }),
                    `marks-test:- script:${script}, dev-vowel: ${vowel}`,
                );
            });

            st.end();
        });
    });
    t.end();
});


function toggleTestHelper(from, to, t) {
    return (data, output) => {
        t.equals(
            output,
            lip.t({ data, from, to }),
        );
    };
}


test('Test toggle', (t) => {
    const f = toggleTestHelper(Script.HK, Script.DEVANAGARI, t);
    f('akSa##kSa##ra', 'अक्षkSaर');
    f('##akSa##kSa##ra', 'akSaक्षra');
    f('akSa##ra##', 'अक्षra');
    f('akSa##ra', 'अक्षra');
    f('akSa##kSa##ra####', 'अक्षkSaर');
    f('a####kSara', 'अक्षर');
    f('a#kSara', 'अ#क्षर');
    t.end();
});


test('Test suspend', (t) => {
    const f = toggleTestHelper(Script.HK, Script.DEVANAGARI, t);
    f('<p>nara iti</p>', '<p>नर इति</p>');
    t.end();
});


test('Test suspend and toggle', (t) => {
    const f = toggleTestHelper(Script.HK, Script.DEVANAGARI, t);
    f('<p>##na##ra## iti</p>', '<p>naर iti</p>');
    t.end();
});
