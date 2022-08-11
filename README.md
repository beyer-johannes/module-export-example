# Nuxt module export example

## Setup project

    pnpm i --shamefully-hoist && cd packages/example-module && pnpm dev:prepare

## Get error

    cd packages/example-project && pnpm build

Will throw `'CarTypes' is not exported by ../example-module/dist/module.mjs, imported by pages/index.vue?macro=true`