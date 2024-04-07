import express from "express";
import cors from "cors";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import resolvers from "./graphql/resolvers.js";
import { readFileSync } from "fs";
import gql from "graphql-tag";
import { buildSubgraphSchema } from "@apollo/subgraph";

const port = process.env.PORT || 5000;

const app = express();

const typeDefs = gql(
  readFileSync("./graphql/schema.graphql", {
    encoding: "utf-8",
  })
);

const main = async () => {
  const server = new ApolloServer({
    schema: buildSubgraphSchema({ typeDefs, resolvers }),
  });

  await server.start();

  // middlewares
  app.use(
    "/graphql",
    cors(),
    express.json(),
    express.urlencoded({ extended: true }),
    expressMiddleware(server)
  );

  app.listen(port, () => {
    console.log("Server is running at port:", port);
  });
};

main();
