## detect-runtime

> **Warning**
> detect-runtime has been deprecated in favor of [std-env](https://github.com/unjs/std-env) (since version 3.4.0), which includes the same functionalities and much more.

Small library to detect the current JavaScript runtime. The list of supported runtimes is based on the [WinterCG Runtime Keys proposal](https://runtime-keys.proposal.wintercg.org/):

 - `edge-routine` Alibaba Cloud Edge Routine
 - `workerd` Cloudflare Workers
 - `deno` Deno and Deno Deploy
 - `lagon` Lagon
 - `react-native` React Native
 - `netlify` Netlify Edge Functions
 - `electron` Electron
 - `node` Node.js
 - `bun` Bun
 - `edge-light` Vercel Edge Functions
 - `fastly` Fastly Compute@Edge

This package is properly typed and exported to both ESM and CJS.

## Installation

`detect-runtime` is published on [NPM](https://www.npmjs.com/package/detect-runtime):

```bash
# NPM
npm install detect-runtime
# Yarn
yarn add detect-runtime
# PNPM
pnpm install detect-runtime
# Bun
bun install detect-runtime
```

Or in Deno:

```ts
import { ... } from 'npm:detect-runtime'
```

## Usage

Import and call the `detectRuntime()` function from the `detect-runtime` package:

```ts
import { detectRuntime } from 'detect-runtime'

const runtime = detectRuntime()
//    ^? 'edge-routine' | 'workerd' | 'deno' | 'lagon' | 'react-native' | 'netlify | 'electron | 'node | 'bun | 'edge-light | 'unknown'
```

You can also import the `Runtime` type which is the return type of `detectRuntime()`.


## License

[MIT](./LICENSE)
