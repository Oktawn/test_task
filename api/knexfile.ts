import type { Knex } from "knex";

// Update with your config settings.

const config: { [key: string]: Knex.Config } = {
  development: {
    client: 'postgresql',
    connection: {
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
    },
    migrations: {
      directory: "./migrations",
    },
    seeds: {
      directory: "./seeds",
    }
  },

  // production: {
  //   client: 'postgresql',
  //   connection: {
  //     database: process.env.DB_NAME,
  //     port: Number(process.env.DB_EXTERN),
  //     user: process.env.DB_USER,
  //     password: process.env.DB_PASSWORD,
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: "knex_migrations"
  //   }
  // }

};

module.exports = config;
