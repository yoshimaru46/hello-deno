# GraphQl server implementation with Deno & GraphQL Yoga

## Tools

- Deno
- GraphQL
  - [GraphQL Yoga](https://the-guild.dev/graphql/yoga-server)
  - [GraphQL Code Generator](https://the-guild.dev/graphql/codegen)
- Postgres
  - [deno-postgres](https://deno-postgres.com)

## Development

### start

```zsh
cd backend
deno task dev
```

```zsh
open http://0.0.0.0:1993/graphql
```

### codegen

```zsh
deno task codegen
```

### db migration

```zsh
deno task migrate:db
```

## Links

- [GraphQL Code Generator](https://the-guild.dev/graphql/codegen)
