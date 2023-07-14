import type { Runtime } from "./types";
import {
  CLOUDFLARE_WORKERS_NAVIGATOR,
  NODE_PROCESS_RELEASE_NAME,
} from "./constants";

/**
 * Detect the current JavaScript runtime following
 * the WinterCG Runtime Keys proposal:
 *
 * - `edge-routine` Alibaba Cloud Edge Routine
 * - `workerd` Cloudflare Workers
 * - `deno` Deno and Deno Deploy
 * - `lagon` Lagon
 * - `react-native` React Native
 * - `netlify` Netlify Edge Functions
 * - `electron` Electron
 * - `node` Node.js
 * - `bun` Bun
 * - `edge-light` Vercel Edge Functions
 * - `fastly` Fastly Compute@Edge
 *
 * @see https://runtime-keys.proposal.wintercg.org/
 * @returns {Runtime}
 */
export function detectRuntime(): Runtime {
  if (typeof Netlify === "object") {
    return "netlify";
  }

  if (typeof EdgeRuntime === "string") {
    return "edge-light";
  }

  if (globalThis.navigator?.userAgent === CLOUDFLARE_WORKERS_NAVIGATOR) {
    return "workerd";
  }

  if (globalThis.Deno) {
    return "deno";
  }

  if (globalThis.__lagon__) {
    return "lagon";
  }

  if (globalThis.process?.release?.name === NODE_PROCESS_RELEASE_NAME) {
    return "node";
  }

  if (globalThis.Bun) {
    return "bun";
  }

  if (globalThis.fastly) {
    return "fastly";
  }

  // TODO: Find a way to detect edge-routine
  // it seems like it's currently in beta:
  // https://www.alibabacloud.com/help/en/dynamic-route-for-cdn/latest/er-overview

  // TODO: Find a way to detect react-native

  // TODO: Find a way to detect electron

  return "unknown";
}
