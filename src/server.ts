import { createYoga } from "graphql-yoga";
import { serve } from "server";
import "dotenv";

import { createContext } from "./context.ts";
import { schema } from "./schema.ts";

// TODO: Add REST API

export const graphQLServer = createYoga({
  schema,
  context: createContext,
});

serve(graphQLServer, {
  port: Number(Deno.env.get("PORT")),
  onListen({ hostname, port }) {
    console.log(`Listening on http://${hostname}:${port}/graphql`);
  },
});
