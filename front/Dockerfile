FROM node:20

WORKDIR /app/front

COPY . .

RUN npm ci

CMD ["npm", "run", "dev", "--", "--host"]