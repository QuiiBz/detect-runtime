import { detectRuntime } from "../../dist/index.mjs";

Deno.serve(() => new Response(`Detected: ${detectRuntime()}`));
