import { detectRuntime } from "../../dist/index.mjs";
import http from "node:http";

const server = http.createServer((_, res) => {
  res.writeHead(200);
  res.end(`Detected: ${detectRuntime()}`);
});

server.listen(8000);
