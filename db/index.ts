import "dotenv/config";

import { drizzle } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";

const sqlite = new Database('sqliteI.db');
export const db = drizzle(sqlite);