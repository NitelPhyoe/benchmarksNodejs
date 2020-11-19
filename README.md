# Only Graphql Server

1.  mercurius ( **silver bullet** )
2.  benzene
3.  apollo (_slowest_)

> On large connections both **apollo** & **benzene** fail!

```ts
yarn install
yarn start
```
duration: 5s
connections: 5
pipelining: 1

| Server                                                                                                                                    | Requests/s | Latency | Throughput/Mb |
| :--                                                                                                                                       | --:        | :-:     | --:           |
| [benzene-server](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/benzene-server.js)                             | 4267.0     | 0.51    | 26.73         |
| [mercurius](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/mercurius.js)                                       | 4201.8     | 0.51    | 26.31         |
| [benzene-server+typed](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/benzene-server+typed.js)                 | 3217.4     | 1.33    | 20.15         |
| [benzene-server+express](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/benzene-server+express.js)             | 3149.4     | 1.37    | 19.80         |
| [mercurius+typed](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/mercurius+typed.js)                           | 3097.8     | 1.36    | 19.39         |
| [benzene-server+express+typed](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/benzene-server+express+typed.js) | 2460.6     | 1.56    | 15.47         |
| [express-graphql](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/express-graphql.js)                           | 1357.6     | 3.16    | 8.50          |
| [apollo-server-fastify](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/apollo-server-fastify.js)               | 1233.6     | 3.47    | 7.76          |
| [apollo-server-express](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/apollo-server-express.js)               | 783.6      | 5.88    | 4.98          |
| [apollo-server](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/apollo-server.js)                               | 777.6      | 5.97    | 4.93          |
| [apollo-server-express+typed](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/apollo-server-express+typed.js)   | 745.8      | 6.24    | 4.74          |
