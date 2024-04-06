import express from "express";
import cors from "cors";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import typeDefs from "./graphql/typeDefs.js";
import resolvers from "./graphql/resolvers.js";

const port = process.env.PORT || 5000;

const app = express();

const main = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
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
