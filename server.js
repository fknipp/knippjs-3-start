import express from "express";
import ViteExpress from "vite-express";
import { createServer } from "vite";

const app = express();
const port = 5173;

/* Add your server routes here */

ViteExpress.listen(app, port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
