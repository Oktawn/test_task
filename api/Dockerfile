FROM node:20

WORKDIR /app/api

COPY . .

RUN npm ci

CMD ["sh", "-c", "npx knex migrate:latest && npx knex seed:run && npm run start"]