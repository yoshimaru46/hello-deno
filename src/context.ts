import { pgClient } from "./pg_client.ts";

export type GraphQLContext = {
  pgClient: typeof pgClient;
};

export function createContext(): GraphQLContext {
  return { pgClient };
}
