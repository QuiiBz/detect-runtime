import { detectRuntime } from "../../dist/index.mjs";

Bun.serve({
  fetch() {
    return new Response(`Detected: ${detectRuntime()}`);
  },
});
