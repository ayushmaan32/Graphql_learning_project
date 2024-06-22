const express = require("express");
const Port = 8000;
const cors = require("cors");
const bodyParser = require("body-parser");
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");

const typeDefs = require("./schema");
const resolvers = require("./resolvers");

async function ServerStart() {
  const app = express();
  app.use(cors());
  app.use(bodyParser.json());

  const server = await new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();
  app.use("/graphql", expressMiddleware(server));

  app.listen(Port, () => {
    console.log("Server is up and running on port 80");
  });
}

ServerStart();
