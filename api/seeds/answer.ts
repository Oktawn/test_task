import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('answer').del();
  await knex('answer').insert([
    { answer: 'Комедия', ans_count: 45, pollId: 1 },
    { answer: 'Драма', ans_count: 30, pollId: 1 },
    { answer: 'Боевик', ans_count: 38, pollId: 1 },
    { answer: 'Фантастика', ans_count: 42, pollId: 1 },
    { answer: 'Ужасы', ans_count: 25, pollId: 1 },

    { answer: 'Каждый день', ans_count: 20, pollId: 2 },
    { answer: '2-3 раза в неделю', ans_count: 35, pollId: 2 },
    { answer: 'Раз в неделю', ans_count: 25, pollId: 2 },
    { answer: 'Редко', ans_count: 15, pollId: 2 },

    { answer: 'Итальянская', ans_count: 40, pollId: 3 },
    { answer: 'Азиатская', ans_count: 35, pollId: 3 },
    { answer: 'Русская', ans_count: 30, pollId: 3 },
    { answer: 'Французская', ans_count: 25, pollId: 3 },
    { answer: 'Мексиканская', ans_count: 20, pollId: 3 },

    { answer: 'Лето', ans_count: 45, pollId: 4 },
    { answer: 'Осень', ans_count: 25, pollId: 4 },
    { answer: 'Зима', ans_count: 30, pollId: 4 },
    { answer: 'Весна', ans_count: 35, pollId: 4 },

    { answer: 'Личный автомобиль', ans_count: 40, pollId: 5 },
    { answer: 'Общественный транспорт', ans_count: 35, pollId: 5 },
    { answer: 'Велосипед', ans_count: 15, pollId: 5 },
    { answer: 'Пешком', ans_count: 20, pollId: 5 },

    { answer: 'Менее 2 часов', ans_count: 15, pollId: 6 },
    { answer: '2-4 часа', ans_count: 30, pollId: 6 },
    { answer: '4-6 часов', ans_count: 35, pollId: 6 },
    { answer: 'Более 6 часов', ans_count: 20, pollId: 6 },

    { answer: 'Онлайн-курсы', ans_count: 35, pollId: 7 },
    { answer: 'Очное обучение', ans_count: 30, pollId: 7 },
    { answer: 'Самообучение', ans_count: 25, pollId: 7 },
    { answer: 'Смешанный формат', ans_count: 20, pollId: 7 },

    { answer: 'Пляжный отдых', ans_count: 40, pollId: 8 },
    { answer: 'Экскурсии', ans_count: 30, pollId: 8 },
    { answer: 'Активный отдых', ans_count: 25, pollId: 8 },
    { answer: 'Дома', ans_count: 15, pollId: 8 },

    { answer: 'Поп', ans_count: 35, pollId: 9 },
    { answer: 'Рок', ans_count: 30, pollId: 9 },
    { answer: 'Классическая', ans_count: 20, pollId: 9 },
    { answer: 'Электронная', ans_count: 25, pollId: 9 },
    { answer: 'Джаз', ans_count: 15, pollId: 9 },

    { answer: 'Отдых дома', ans_count: 30, pollId: 10 },
    { answer: 'Встречи с друзьями', ans_count: 35, pollId: 10 },
    { answer: 'Активный отдых', ans_count: 25, pollId: 10 },
    { answer: 'Хобби', ans_count: 20, pollId: 10 },
    { answer: 'Путешествия', ans_count: 15, pollId: 10 }
  ]);
};
