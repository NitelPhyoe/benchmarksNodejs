'use strict';

const express = require('express');
const { Benzene, httpHandler } = require('@benzene/server');

const {
  createAsyncMiddlewareTypeGraphQLSchema,
} = require('../lib/schemas/createTypeGraphQLSchema');

(async () => {
  const schema = await createAsyncMiddlewareTypeGraphQLSchema();

  const app = express();

  const GQL = new Benzene({ schema });

  app.all('/graphql', httpHandler(GQL));

  app.listen(4000);
})();
