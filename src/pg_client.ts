import { Client } from "postgres";
import "dotenv";

const databaseUrl = Deno.env.get("DATABASE_URL");
export const pgClient = new Client(databaseUrl);
