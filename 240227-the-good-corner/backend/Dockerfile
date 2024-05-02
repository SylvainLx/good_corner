FROM node:lts-alpine

RUN mkdir /app/
WORKDIR /app/

COPY *.json ./
RUN npm i
COPY src/ ./

CMD npm run db:reset && npm run dev