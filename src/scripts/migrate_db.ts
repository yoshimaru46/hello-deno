import { pgClient } from "../pg_client.ts";

// TODO: use sqldef？
try {
  // Create the table
  await pgClient.queryObject`
    CREATE TABLE IF NOT EXISTS todo (
      id SERIAL PRIMARY KEY,
      title TEXT NOT NULL,
      description TEXT NOT NULL
    )
  `;
} finally {
  pgClient.end();
}
