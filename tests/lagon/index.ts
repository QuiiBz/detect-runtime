import { detectRuntime } from "../../dist/index.mjs";

export function handler() {
  return new Response(`Detected: ${detectRuntime()}`);
}
