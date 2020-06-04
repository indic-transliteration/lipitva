# lipitva

**lipitva** is a modular and efficient javascript port of python sanscript. In logic, It diverges from sanscript, only when the nature of JavaScript, TypeScript justifies such diverging. Interfaces are fine tuned for js eco-system.

## Installation

### npm

```sh
npm install --save lipitva
```

### browser

```html
<head>
  ...
</head>
<body>
  ...
  <!-- Bottom of body -->
  <script src="https://unpkg.com/lipitva/dist-umd/lipitva.min.js"></script>
</body>
```

## Usage

### Basic usage

For basic use cases, lipitva exports a singleton named `lip`. It is a pre-configured instance of `Lip` type. you can use it as follows

```js
// ES6
import lip from 'lipitva';
```

```js
// Browser
lip
// or
window.lip
```

```js
const content = 'धर्मक्षेत्रे कुरुक्षेत्रे <b>समवेता</b> युयुत्सवः ।';
let teluguContent = lip.t({
    data: content,
    from: 'devanagari',
    to: 'telugu',
    suspendOn: new Set(['<']), // optional
    suspendOff: new Set(['>']), // optional
})
console.log(teluguContent); // logs "ధర్మక్షేత్రే కురుక్షేత్రే <b>సమవేతా</b> యుయుత్సవః ।"
```

We can also replace text-content of an `HTMLElement` with it's transliterated form using `lip.te` method. (te : transliterate-element). This method transliterates in-place in DOM. Thus it doesn't re-render DOM, or doesn't remove any callbacks. This operation's recursive nature also can be specified.

```js
const elem = document.getElementById('my-element);
lip.te({
    elem,
    from: 'devanagari',
    to: 'gujarati',
    recursive: true, // optional
});
```

### Modular usage (Recommended)

Instead of using default export, we can use `lipitva` in modular way. This way we can bundle only required functionality, and required scripts in our apps. This way we can also use enums, functional tools which are not exported in singleton. Following is an example, to demo how to include only devanagari, telugu, itrans scripts in our app.

```js
// module A:
// A scripts registry, to manage scripts and script-maps efficiently
import { ScriptsRegistry } from 'lipitva/dist/registry';
// A helper interface to invoke various tools easily. default export `lip` is instance of this class.
import { Lip } from 'lipitva/dist/Lip';

import { Telugu } from 'lipitva/dist/scripts/brahmic/Telugu';
import { Devanagari } from 'lipitva/dist/scripts/brahmic/Devanagari'
import { Itrans } from 'lipitva/dist/scripts/roman/ITrans'

const registry = new ScriptsRegistry();
registry.register([Telugu, Devanagari, Itrans]);

// Now we can export our custom minimal instance of Lip from this module, and can use it through out our app.
export const customLip = new Lip(registry);
```

```js
// module B
import { Script } from 'lipitva/dist/enum';
import { customLip } from './A';

const tVal = customLip.t({
    data: 'रामालयम्',
    from: Script.DEVANAGARI,
    to: Script.TELUGU,
}); // equals to రామాలయమ్
```

As `lipitva` allows efficient tree-shaking, in final bundle only those imported modules will be included. we can use functional tools like `transliterate`, `transliterateElem` directly too, instead of using OOP friendly `Lip` interface.

For further usage, and info refer code.

## Development

### Stack

- Written in ES6 modules.
- Written in strict TypeScript
- Outputs in three module systems. `commonJs` in `dist`, `ES6` in `dist-esm`, and `umd` bundles. rollup is used for umd-bundling
- Strictly adheres to [airbnb style guide](https://github.com/airbnb/javascript). Before build, code should be validated against this style guide using ESLint (`npm run lint`). It is recommended to use ESLint plugin for IDEs like vscode. Thus they will lint code while you are coding, and provide auto formatting functionality.
- [Tape](https://github.com/substack/tape) is used for testing. Read: [1🔗](https://ponyfoo.com/articles/testing-javascript-modules-with-tape), [2🔗](https://medium.com/javascript-scene/why-i-use-tape-instead-of-mocha-so-should-you-6aa105d8eaf4)

### Setup

clone the repository. And install (dev)dependencies.

```sh
npm install
```

### Lint

```sh
npm run lint
```

### Build

```sh
npm run build
```

## Test

```sh
npm run test
```

### Publish

```sh
npm publish --access public
```

## See also

- [indic_transliteration](https://github.com/sanskrit-coders/indic_transliteration): python package, which packages `sanscript`
- [sanscript.js](https://github.com/sanskrit/sanscript.js)
- [Akshara mukha](https://aksharamukha.appspot.com/converter)
