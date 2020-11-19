'use strict';

const { ApolloServer } = require('apollo-server-express');
const {
  createAsyncMiddlewareTypeGraphQLSchema,
} = require('../lib/schemas/createTypeGraphQLSchema');

(async () => {
  const express = require('express');

  const schema = await createAsyncMiddlewareTypeGraphQLSchema();
  const app = express();

  const server = new ApolloServer({
    schema,
  });

  server.applyMiddleware({ app });

  app.listen(4000);
})();
