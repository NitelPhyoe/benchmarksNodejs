'use strict';

const Fastify = require('fastify');
const mercurius = require('mercurius');
const {
  createAsyncMiddlewareTypeGraphQLSchema,
} = require('../lib/schemas/createTypeGraphQLSchema');

(async () => {
  const schema = await createAsyncMiddlewareTypeGraphQLSchema();

  const app = Fastify();

  app.register(mercurius, {
    schema,
    jit: 1,
  });

  app.listen(4000);
})();
