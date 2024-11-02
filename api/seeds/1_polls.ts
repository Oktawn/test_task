import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  await knex.raw('TRUNCATE TABLE polls, answer RESTART IDENTITY CASCADE');
  await knex('polls').insert([
    { title: 'Какой ваш любимый жанр фильмов?' },
    { title: 'Как часто вы занимаетесь спортом?' },
    { title: 'Какой тип кухни вы предпочитаете?' },
    { title: 'Какой сезон года вы любите больше всего?' },
    { title: 'Какой тип транспорта вы используете чаще всего?' },
    { title: 'Сколько часов в день вы проводите в интернете?' },
    { title: 'Какой способ обучения вам больше подходит?' },
    { title: 'Как вы предпочитаете проводить отпуск?' },
    { title: 'Какой тип музыки вы слушаете чаще всего?' },
    { title: 'Какой ваш любимый способ проведения выходных?' }
  ]);
};
