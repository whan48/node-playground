# 01: Install node.js

Please go to the [web site](https://nodejs.org/en/) and install the latest version of node.js (v4.3.2 LTS) 
for your platform.

In your bash, type this to start node
```shell
$ node 
> process.versions
{ http_parser: '2.5.2',
  node: '4.3.2',
  v8: '4.5.103.35',
  uv: '1.8.0',
  zlib: '1.2.8',
  ares: '1.10.1-DEV',
  icu: '56.1',
  modules: '46',
  openssl: '1.0.2g' }
> process.platform
'darwin'
> process.exit()
$ 
```


[Docker version](https://hub.docker.com/r/ontouchstart/docker-node/)
```shell
$ docker run --rm -it ontouchstart/docker-node:v4.3.2 node 
> process.versions
{ http_parser: '2.5.2',
  node: '4.3.2',
  v8: '4.5.103.35',
  uv: '1.8.0',
  zlib: '1.2.8',
  ares: '1.10.1-DEV',
  modules: '46',
  openssl: '1.0.2g' }
> process.platform
'linux'
> process.exit()
```

That is it. Please post your result in the [lesson issue](https://github.com/bigdata-mindstorms/node-playground/issues/3).
