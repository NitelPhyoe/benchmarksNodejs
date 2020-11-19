'use strict';

const polka = require('polka');
const { Benzene, httpHandler } = require('@benzene/server');

const {
  createAsyncGraphqlComposeSchema,
} = require('../lib/schemas/createGraphqlCompose');

const schema = createAsyncGraphqlComposeSchema();

const app = polka();

const GQL = new Benzene({ schema });

app.all('/graphql', httpHandler(GQL));

app.listen(4000);
