import { detectRuntime } from "../../dist/index.mjs";

Deno.serve({ port: 3000 }, () => new Response(`Detected: ${detectRuntime()}`));
