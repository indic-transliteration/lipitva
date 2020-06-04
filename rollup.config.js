import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import { terser } from 'rollup-plugin-terser';


const onwarn = (warning, onwarnOriginal) => {
    // ignores the annoying this is undefined warning for kwargs spread
    if (warning.code === 'THIS_IS_UNDEFINED') return;
    onwarnOriginal(warning);
};


export default [
    // browser friendly UMD builds
    {
        input: 'dist-esm/index.js',
        output: {
            name: 'lip',
            file: 'dist-umd/lipitva.js',
            format: 'umd',
        },
        plugins: [
            json(),
            resolve(),
            commonjs(),
        ],
        external: [
        ],
        onwarn,
    },

    {
        input: 'dist-esm/index.js',
        output: {
            name: 'lip',
            file: 'dist-umd/lipitva.min.js',
            format: 'umd',
        },
        plugins: [
            json(),
            resolve(),
            commonjs(),
            terser({
                sourcemap: true,
            }),
        ],
        onwarn,
    },
];
