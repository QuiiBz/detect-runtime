## detect-runtime

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

This package is properly typed and exported to both ESM and CJS.

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
