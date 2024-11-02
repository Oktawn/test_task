import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('answer', table => {
    table.increments('id').primary();
    table.string('answer').notNullable();
    table.integer('ans_count').notNullable();
    table.integer('pollId').notNullable();
    table.foreign('pollId').references('id').inTable('polls').onDelete('CASCADE');
  })
}


export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists('answer');
}

