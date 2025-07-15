import "dotenv/config";

import { migrate } from "drizzle-orm/better-sqlite3/migrator";
import { db } from "./index";

console.log("migration started...");
migrate(db, { migrationsFolder: "drizzle"});
console.log("migration ended...");