'use strict';

const { ApolloServer } = require('apollo-server');
const {
  createAsyncGraphqlComposeSchema,
} = require('../lib/schemas/createGraphqlCompose');

const schema = createAsyncGraphqlComposeSchema();

const server = new ApolloServer({
  schema,
});

server.listen(4000);
