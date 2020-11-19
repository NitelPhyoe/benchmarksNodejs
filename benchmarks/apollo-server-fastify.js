'use strict';

const { ApolloServer } = require('apollo-server-fastify');
const app = require('fastify')();
const {
  createAsyncGraphqlComposeSchema,
} = require('../lib/schemas/createGraphqlCompose');
const schema = createAsyncGraphqlComposeSchema();

const server = new ApolloServer({ schema });

app.register(server.createHandler());
app.listen(4000);
