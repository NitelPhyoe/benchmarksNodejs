'use strict';

const { ApolloServer } = require('apollo-server-express');
const {
  createAsyncGraphqlComposeSchema,
} = require('../lib/schemas/createGraphqlCompose');
const express = require('express');

const schema = createAsyncGraphqlComposeSchema();
const app = express();

const server = new ApolloServer({
  schema,
});

server.applyMiddleware({ app });

app.listen(4000);
