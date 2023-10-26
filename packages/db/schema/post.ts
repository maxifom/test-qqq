import { sql } from "drizzle-orm";
import { serial, text, timestamp, varchar } from "drizzle-orm/pg-core";

import { pgTable } from "./_table";

export const post = pgTable("post", {
  id: serial("id").primaryKey(),
  title: text("name").notNull(),
  content: text("content").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }),
});
