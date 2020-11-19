'use strict';

const Fastify = require('fastify');
const mercurius = require('mercurius');
const {
  createAsyncGraphqlComposeSchema,
} = require('../lib/schemas/createGraphqlCompose');
const schema = createAsyncGraphqlComposeSchema();

const app = Fastify();

app.register(mercurius, {
  schema,
  jit: 1,
});

app.listen(4000);
