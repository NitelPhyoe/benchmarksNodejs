# benchmarksNodejs
duration: 5.01s
connections: 5
pipelining: 1

| Server                                                                                                                                    | Requests/s | Latency | Throughput/Mb |
| :--                                                                                                                                       | --:        | :-:     | --:           |
| [benzene-server](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/benzene-server.js)                             | 4092.6     | 0.54    | 25.64         |
| [mercurius](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/mercurius.js)                                       | 4059.8     | 0.53    | 25.41         |
| [benzene-server+express](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/benzene-server+express.js)             | 3042.6     | 1.37    | 19.13         |
| [mercurius+typed](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/mercurius+typed.js)                           | 2936.6     | 1.44    | 18.38         |
| [benzene-server+typed](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/benzene-server+typed.js)                 | 2910.2     | 1.42    | 18.23         |
| [benzene-server+express+typed](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/benzene-server+express+typed.js) | 2265.0     | 1.66    | 14.24         |
| [express-graphql](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/express-graphql.js)                           | 1313.8     | 3.26    | 8.23          |
| [apollo-server-fastify](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/apollo-server-fastify.js)               | 996.4      | 4.49    | 6.27          |
| [apollo-server](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/apollo-server.js)                               | 769.4      | 6.03    | 4.87          |
| [apollo-server-express+typed](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/apollo-server-express+typed.js)   | 722.0      | 6.44    | 4.59          |
| [apollo-server-express](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/apollo-server-express.js)               | 621.4      | 7.54    | 3.95          |
