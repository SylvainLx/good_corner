FROM node:lts-alpine

RUN mkdir /app/
WORKDIR /app/

COPY *.json ./
RUN npm i
COPY codegen.ts ./
COPY next.config.js ./
COPY next-env.d.ts ./
COPY public/ ./
COPY src/ ./

CMD npm run dev