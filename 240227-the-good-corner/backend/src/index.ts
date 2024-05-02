import express from "express";
import cors from "cors";
import { dataSource } from "./data/config";
import { Category } from "./data/entities/category";
import { Like } from "typeorm";
import { Tag } from "./data/entities/tag";
import adRouter from "./routes/ads";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { buildSchema } from "type-graphql";
import { AdResolver } from "./data/resolvers/AdResolver";
import { CategoryResolver } from "./data/resolvers/CategoryResolver";
import { TagResolver } from "./data/resolvers/TagResolver";
import "reflect-metadata";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Woohoo, ça fonctionne !");
});

const startApollo = async () => {
  interface MyContext {
    token?: string;
  }

  const schema = await buildSchema({
    resolvers: [AdResolver, CategoryResolver, TagResolver],
  });

  const apolloServer = new ApolloServer<MyContext>({ schema });
  await apolloServer.start();

  app.use(
    "/graphql",
    cors<cors.CorsRequest>(),
    express.json(),
    expressMiddleware(apolloServer)
  );
};
startApollo();

app.use("/ads", adRouter);

app.get("/categories", async (req, res) => {
  const needle = req.query.needle || "";
  const categories = await Category.find({
    where: { title: Like(`%${needle}%`) },
  });
  res.json(categories);
});

app.get("/tags", async (req, res) => {
  const tags = await Tag.find();
  res.json(tags);
});

app.listen(8000, async () => {
  await dataSource.initialize();
  console.log(`API Server listening on http://localhost:8000`);
});
