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

| Server                                                                                                                                | Requests/s | Latency | Throughput/Mb |
| :------------------------------------------------------------------------------------------------------------------------------------ | ---------: | :-----: | ------------: |
| [benzene-server](https://github.com/NitelPhyoe/benchmarksNodejs/tree/master/benchmarks/benzene-server.js)                             |     3783.0 |  0.65   |         23.70 |
| [mercurius](https://github.com/NitelPhyoe/benchmarksNodejs/tree/master/benchmarks/mercurius.js)                                       |     3525.0 |  0.71   |         22.06 |
| [benzene-server+express](https://github.com/NitelPhyoe/benchmarksNodejs/tree/master/benchmarks/benzene-server+express.js)             |     2839.4 |  1.50   |         17.84 |
| [benzene-server+typed](https://github.com/NitelPhyoe/benchmarksNodejs/tree/master/benchmarks/benzene-server+typed.js)                 |     2791.4 |  1.52   |         17.49 |
| [mercurius+typed](https://github.com/NitelPhyoe/benchmarksNodejs/tree/master/benchmarks/mercurius+typed.js)                           |     2757.0 |  1.57   |         17.26 |
| [tinyHttp+benzene+typed](https://github.com/NitelPhyoe/benchmarksNodejs/tree/master/benchmarks/tinyHttp+benzene+typed.js)             |     2587.0 |  1.58   |         16.26 |
| [benzene-server+express+typed](https://github.com/NitelPhyoe/benchmarksNodejs/tree/master/benchmarks/benzene-server+express+typed.js) |     2308.2 |  1.70   |         14.51 |
| [express-graphql](https://github.com/NitelPhyoe/benchmarksNodejs/tree/master/benchmarks/express-graphql.js)                           |     1253.4 |  3.45   |          7.85 |
| [apollo-server-fastify](https://github.com/NitelPhyoe/benchmarksNodejs/tree/master/benchmarks/apollo-server-fastify.js)               |     1058.2 |  4.16   |          6.66 |
| [apollo-server](https://github.com/NitelPhyoe/benchmarksNodejs/tree/master/benchmarks/apollo-server.js)                               |      717.6 |  6.49   |          4.55 |
| [apollo-server-express](https://github.com/NitelPhyoe/benchmarksNodejs/tree/master/benchmarks/apollo-server-express.js)               |      699.0 |  6.69   |          4.44 |
| [apollo-server-express+typed](https://github.com/NitelPhyoe/benchmarksNodejs/tree/master/benchmarks/apollo-server-express+typed.js)   |      688.4 |  6.79   |          4.37 |

duration: 5.21s
connections: 1000
pipelining: 1

| Server                                                                                                                                | Requests/s | Latency | Throughput/Mb |
| :------------------------------------------------------------------------------------------------------------------------------------ | ---------: | :-----: | ------------: |
| [mercurius](https://github.com/NitelPhyoe/benchmarksNodejs/tree/master/benchmarks/mercurius.js)                                       |     3052.6 | 251.55  |         19.11 |
| [benzene-server](https://github.com/NitelPhyoe/benchmarksNodejs/tree/master/benchmarks/benzene-server.js)                             |     2847.8 | 269.60  |         17.84 |
| [benzene-server+express](https://github.com/NitelPhyoe/benchmarksNodejs/tree/master/benchmarks/benzene-server+express.js)             |     2659.8 | 289.14  |         16.72 |
| [benzene-server+typed](https://github.com/NitelPhyoe/benchmarksNodejs/tree/master/benchmarks/benzene-server+typed.js)                 |     2492.4 | 301.80  |         15.61 |
| [mercurius+typed](https://github.com/NitelPhyoe/benchmarksNodejs/tree/master/benchmarks/mercurius+typed.js)                           |     2262.6 | 338.18  |         14.17 |
| [tinyHttp+benzene+typed](https://github.com/NitelPhyoe/benchmarksNodejs/tree/master/benchmarks/tinyHttp+benzene+typed.js)             |     2203.2 | 347.95  |         13.85 |
| [benzene-server+express+typed](https://github.com/NitelPhyoe/benchmarksNodejs/tree/master/benchmarks/benzene-server+express+typed.js) |     1227.8 | 713.61  |          7.72 |
| [apollo-server-fastify](https://github.com/NitelPhyoe/benchmarksNodejs/tree/master/benchmarks/apollo-server-fastify.js)               |     1060.2 | 588.60  |          6.67 |
| [express-graphql](https://github.com/NitelPhyoe/benchmarksNodejs/tree/master/benchmarks/express-graphql.js)                           |     1021.0 | 690.22  |          6.39 |
| [apollo-server](https://github.com/NitelPhyoe/benchmarksNodejs/tree/master/benchmarks/apollo-server.js)                               |      649.8 | 795.44  |          4.12 |
| [apollo-server-express](https://github.com/NitelPhyoe/benchmarksNodejs/tree/master/benchmarks/apollo-server-express.js)               |      575.4 | 853.92  |          3.66 |
| [apollo-server-express+typed](https://github.com/NitelPhyoe/benchmarksNodejs/tree/master/benchmarks/apollo-server-express+typed.js)   |      508.0 | 1099.40 |          3.23 |
