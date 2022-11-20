import { assertEquals } from "asserts";
import { graphQLServer } from "./server.ts";

Deno.test("Deno example test", async () => {
  const response = await graphQLServer.fetch(
    "http://yoga/graphql?query={hello}",
    {}
  );
  const { data } = await response.json();
  assertEquals(data.hello, "Hello Deno!");
});
