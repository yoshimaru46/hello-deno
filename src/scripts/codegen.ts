import { codegen } from "@graphql-codegen/core";
import { GraphQLSchema, buildSchema, printSchema, parse } from "graphql";
import * as typescriptPlugin from "@graphql-codegen/typescript";
import * as typescriptResolversPlugin from "@graphql-codegen/typescript-resolvers";
import { typeDefs } from "./../schema.ts";

const schema: GraphQLSchema = buildSchema(typeDefs);
const outputFile = "./src/generated/resolvers_types.ts";
const config: Parameters<typeof codegen>[0] = {
  documents: [],
  config: {
    contextType: "./../context.ts#GraphQLContext",
  },
  // used by a plugin internally, although the 'typescript' plugin currently
  // returns the string output, rather than writing to a file
  filename: outputFile,
  schema: parse(printSchema(schema)),
  plugins: [
    // Each plugin should be an object
    {
      typescript: {}, // Here you can pass configuration to the plugin
    },
    {
      typescriptResolvers: {
        immutableTypes: true,
      },
    },
  ],
  pluginMap: {
    typescript: typescriptPlugin,
    typescriptResolvers: typescriptResolversPlugin,
  },
};

const output = await codegen(config);
await Deno.writeFile(outputFile, new TextEncoder().encode(output));
console.log("Outputs generated!");
