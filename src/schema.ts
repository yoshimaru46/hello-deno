import { resolvers } from "./resolvers/index.ts";
import { createSchema } from "graphql-yoga";
import { GraphQLContext } from "./context.ts";

export const typeDefs = await Deno.readTextFile(
  new URL("./schema.graphql", import.meta.url)
);

export const schema = createSchema<GraphQLContext>({
  typeDefs,
  resolvers,
});
