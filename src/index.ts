import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { products } from "./data/product.js";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.get("/products", (c) => {
  return c.json(products);
});

serve(
  {
    fetch: app.fetch,
    port: 3000,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
  },
);
