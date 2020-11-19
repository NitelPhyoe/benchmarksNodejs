'use strict';

const polka = require('polka');
const { graphqlHTTP } = require('express-graphql');
const {
  createAsyncGraphqlComposeSchema,
} = require('../lib/schemas/createGraphqlCompose');
const schema = createAsyncGraphqlComposeSchema();

const app = polka();

app.all('/graphql', graphqlHTTP({ schema }));

app.listen(4000);
