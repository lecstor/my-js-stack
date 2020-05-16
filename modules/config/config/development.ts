import { Config, RecursivePartial } from "./types";

export const config: RecursivePartial<Config> = {
  knex: {
    connection: {
      database: "lecstor",
      user: "lecstor",
      password: "fooBar"
    },
    pool: {
      min: 2,
      max: 4
    },
    migrations: {
      disableMigrationsListValidation: true
    }
  },
  gateway: {
    cors: {
      origin: ["http://localhost:4321", "http://react-app:4321"]
    },
    session: {
      secret: "cnjdubvksmfgsdfvfvdfgw",
      secure: false
    },
    url: {
      external: "http://localhost:4040"
    }
  },
  reactApp: {
    gateway: "internal",
    host: "0.0.0.0",
    port: 4321,
    url: {
      external: "http://localhost:4321",
      internal: "http://react-app:4321"
    }
  }
};
