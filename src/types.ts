declare global {
  // https://vercel.com/docs/concepts/functions/edge-functions/edge-runtime#check-if-you're-running-on-the-edge-runtime
  var EdgeRuntime: string;

  // https://docs.netlify.com/edge-functions/api/#netlify-global-object
  var Netlify: object;

  var Bun: any;

  var Deno: any;

  var __lagon__: any;
}

// Follows the list of Runtime Keys from the WinterCG proposal:
// https://runtime-keys.proposal.wintercg.org/
export type Runtime =
  | "edge-routine"
  | "workerd"
  | "deno"
  | "lagon"
  | "react-native"
  | "netlify"
  | "electron"
  | "node"
  | "bun"
  | "edge-light"
  | "unknown";
