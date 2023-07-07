// TODO: edge-runtime doesn't accept inline imports?
import { detectRuntime } from "../../dist/index.mjs";

addEventListener("fetch", (event) => {
  return event.respondWith(new Response(`Detected: ${detectRuntime()}`));
});
