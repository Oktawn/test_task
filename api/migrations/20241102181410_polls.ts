import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('polls', table => {
    table.increments('id').primary();
    table.string('title').unique().notNullable();
  })
}


export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists('polls');
}

