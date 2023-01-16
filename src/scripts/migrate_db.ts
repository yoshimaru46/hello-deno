import { pgClient } from "../pg_client.ts";

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
