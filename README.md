# Only Graphql Server

1.  mercurius ( **silver bullet** )
2.  benzene
3.  apollo (_slowest_)

> On large connections both **apollo** & **benzene** fail!

```ts
yarn install
yarn start
```

duration: 5.17s
connections: 1000
pipelining: 1

| Server                                                                                                                                    | Requests/s | Latency | Throughput/Mb |
| :---------------------------------------------------------------------------------------------------------------------------------------- | ---------: | :-----: | ------------: |
| [benzene-server](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/benzene-server.js)                             |     3867.2 | 198.74  |         24.23 |
| [mercurius](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/mercurius.js)                                       |     3671.4 | 209.63  |         22.98 |
| [mercurius+typed](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/mercurius+typed.js)                           |     2882.6 | 266.55  |         18.05 |
| [benzene-server+express](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/benzene-server+express.js)             |     2837.8 | 269.45  |         17.84 |
| [benzene-server+typed](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/benzene-server+typed.js)                 |     2823.8 | 269.60  |         17.69 |
| [benzene-server+express+typed](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/benzene-server+express+typed.js) |     2227.4 | 342.44  |         14.00 |
| [express-graphql](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/express-graphql.js)                           |     1181.0 | 530.37  |          7.39 |
| [apollo-server-fastify](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/apollo-server-fastify.js)               |     1079.0 | 574.22  |          6.79 |
| [apollo-server-express](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/apollo-server-express.js)               |      692.0 | 712.46  |          4.40 |
| [apollo-server](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/apollo-server.js)                               |      669.8 | 735.70  |          4.24 |
| [apollo-server-express+typed](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/apollo-server-express+typed.js)   |      607.0 | 818.32  |          3.86 |
