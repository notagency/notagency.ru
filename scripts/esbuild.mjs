/**
 * We are using ESM export / import for node here
 * So all files which are being used here should have .mjs extension (not .js)
 * @see https://formidable.com/blog/2021/node-esm-and-exports/
 *
 * Note: typescript should not be used on production server (code should be translated into js)
 * That's why we have to use js here.
 */

import { build } from 'esbuild'
import { NodeResolvePlugin } from '@esbuild-plugins/node-resolve'
import { AliasResolvePlugin } from '../esbuild-plugins/alias-resolve/index.mjs' // https://stackoverflow.com/a/64507978

// ugly workaround to support old modules which doesn't support ESM (doesn't have "exports" key in package.json)
const OLD_MODULES = [
  'lodash',
  'convert-layout'
];

const isOldModule = (resolved) => {
    const re = new RegExp(`(${OLD_MODULES.join('|')})\/`)
    return re.test(resolved)
}

build({
    entryPoints: ['src/server.ts'],
    bundle: true,
    format: 'esm',
    outfile: 'dist/server.mjs',
    platform: 'node',
    packages: 'external',
    plugins: [
        AliasResolvePlugin({
            alias: { 'src/*': './src/' },
        }),
        NodeResolvePlugin({
            extensions: ['.ts', '.js'],
            onResolved: (resolved) => {
                if (resolved.includes('node_modules')) {
                    return {
                        path:  isOldModule(resolved) ? resolved.split('node_modules/')[1] : undefined,
                        external: true
                    }
                } else if (resolved.includes('/dist/')) {
                    return {
                        external: true,
                    }
                }
                return resolved
            },
        })
    ],
}).then(() => {
    // do nothing
})
