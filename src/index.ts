import { serve } from "srvx";

import { Hono } from "hono";

const app = new Hono();
app.get("/", (c) => c.text("Hello via Bun!\n"));

serve({
  fetch: app.fetch,
  port: 3000,
});
