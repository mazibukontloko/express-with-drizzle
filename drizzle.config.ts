// import type { Config } from "drizzle-kit";

// export default {
//   schema: "./db/schema.ts",
//   out: "./drizzle",
//   driver: "better-sqlite",
//   dbCredentials: {
//     url: "sqliteI.db",
//   },
// } satisfies Config;

import { defineConfig } from "drizzle-kit";
export default defineConfig({
  dialect: "sqlite",
  schema: "./db/schema.ts",
  out: "./drizzle",  
  dbCredentials: {
    url: "sqliteI.db",
  },
});