# Only Graphql Server

1.  mercurius & benzene( **silver bullet** )
2.  express-graphql
3.  apollo (_slowest_)

> On large connections both **apollo** & **benzene** fail!

```ts
yarn install
yarn start
```
duration: 5.01s
connections: 5
pipelining: 1

| Server                                                                                                                                    | Requests/s | Latency | Throughput/Mb |
| :--                                                                                                                                       | --:        | :-:     | --:           |
| [mercurius](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/mercurius.js)                                       | 3321.4     | 0.84    | 20.79         |
| [benzene-server](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/benzene-server.js)                             | 3233.4     | 0.89    | 20.25         |
| [benzene-server+typed](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/benzene-server+typed.js)                 | 2781.4     | 1.54    | 17.42         |
| [benzene-server+express](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/benzene-server+express.js)             | 2512.6     | 1.64    | 15.79         |
| [tinyHttp+benzene+typed](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/tinyHttp+benzene+typed.js)             | 2507.4     | 1.64    | 15.77         |
| [mercurius+typed](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/mercurius+typed.js)                           | 2345.6     | 1.70    | 14.68         |
| [benzene-server+express+typed](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/benzene-server+express+typed.js) | 2337.2     | 1.69    | 14.69         |
| [express-graphql](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/express-graphql.js)                           | 1176.4     | 3.69    | 7.37          |
| [apollo-server-fastify](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/apollo-server-fastify.js)               | 748.4      | 6.20    | 4.71          |
| [apollo-server](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/apollo-server.js)                               | 667.0      | 6.99    | 4.22          |
| [apollo-server-express](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/apollo-server-express.js)               | 645.6      | 7.27    | 4.10          |
| [apollo-server-express+typed](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/apollo-server-express+typed.js)   | 453.8      | 10.52   | 2.88          |
