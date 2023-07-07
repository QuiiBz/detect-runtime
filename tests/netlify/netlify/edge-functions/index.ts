import { detectRuntime } from "../../../../dist/index.mjs";

export default () => new Response(`Detected: ${detectRuntime()}`);

export const config = { path: "/" };
