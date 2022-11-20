import { Resolvers, Todo } from "./../generated/resolvers_types.ts";

export const resolvers: Resolvers = {
  Query: {
    hello: () => "Hello Deno!",
    todos: async (_parent, _args, context) => {
      const result = await context.pgClient.queryObject<Todo>`
        SELECT id, title, description
        FROM todo`;
      return result.rows;
    },
  },
  Mutation: {
    createTodo: async (_parent, args, context) => {
      const { title, description } = args.input;
      const result = await context.pgClient.queryObject<Todo>`
        INSERT INTO todo (title, description)
        VALUES (${title}, ${description})
        RETURNING id, title, description`;
      return result.rows[0];
    },
    updateTodo: async (_parent, args, context) => {
      const { id } = args;
      const { title, description } = args.input;
      const result = await context.pgClient.queryObject<Todo>`
        UPDATE todo
        SET title = ${title}, description = ${description}
        WHERE id = ${id}
        RETURNING id, title, description`;
      return result.rows[0];
    },
    deleteTodo: async (_parent, args, context) => {
      const { id } = args;
      const result = await context.pgClient.queryObject<Todo>`
        DELETE FROM todo
        WHERE id = ${id}
        RETURNING id, title, description`;
      return result.rows[0];
    },
  },
};
