# Тестовое задание: Платформа для создания интерактивных опросов

## Описание задачи:

Создать веб\-приложение для создания и участия в интерактивных опросах, используя **TypeScript** как на фронтенде, так и на бэкенде. Пользователи могут создавать опросы, голосовать и просматривать результаты.

## Технологии

### Frontend:

* ReactJS+ Vite

### Backend:

* Фреймворк: NestJS  
* База данных: PostgreSQL
* Работа с БД: Typeorm,Knex

### Docker:

* docker-compose


## Основные функции

### Backend

**REST API**

* POST /api/polls  
  * Создать новый опрос.  
* GET /api/polls  
  * Получить список всех опросов.  
* GET /api/polls/:id
  * Получить один опрос с вариантами ответов
* DELETE /api/polls/:id  
  * Удалить опрос по его ID.  
* POST /api/polls/:id/vote?idAnswer  
  * Проголосовать за один из вариантов в опросе по его ID.

Можно использовать готовые шаблоны для NestJS, не требуется реализация JWT и авторизации.

### Frontend

* Одностраничное приложение  
  * Реализовано взаимодействие с вышеописанным API.  
* Функциональность  
  * Создание нового опроса с вопросом и вариантами ответов.  
  * Просмотр списка всех опросов.  
  * Возможность голосовать в опросах.  
  * Отображение результатов голосования \- количество голосов за каждый вариант.  
* Polling  
  * Реализован механизм обновления данных, чтобы несколько пользователей могли видеть изменения в реальном времени.
  Изменение количества голосов происходит каждые 5 секунд при открытом опросе. 
     

## PS

из gitignor`a убран .env для запуска