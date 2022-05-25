# @roshan-labs/icon-module

[![npm (scoped)](https://img.shields.io/npm/v/@roshan-labs/icon-module)](https://www.npmjs.com/package/@roshan-labs/icon-module)
![GitHub](https://img.shields.io/github/license/roshan-labs/icon-module)

Icon module for Nuxt, based on [unplugin-icons](https://github.com/antfu/unplugin-icons).

## Install

```sh
npm install @roshan-labs/icon-module
# or
yarn add @roshan-labs/icon-module
```

## Usage

```js
import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  modules: ['@roshan-labs/icon-module'],
  icons: {
    // options
  },
})
```

Typescript project

```json
{
  "compilerOptions": {
    "types": ["unplugin-icons/types/vue"]
  }
}
```

## Options

View [unplugin-icons](https://github.com/antfu/unplugin-icons) options.

## License

MIT
