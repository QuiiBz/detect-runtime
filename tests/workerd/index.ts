import { detectRuntime } from "../../dist/index.mjs";

export default {
  fetch() {
    return new Response(`Detected: ${detectRuntime()}`);
  },
};
