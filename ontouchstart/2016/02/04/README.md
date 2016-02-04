# 2016/02/04

Always check the source first, make sure you understand it before send it through the pipe.

Input
```shell
curl -fsSL \
https://bigdata-mindstorms.github.io/node-playground/ontouchstart/2016/02/04/versions.js
```

Output
```shell
$ curl -fsSL \
> https://bigdata-mindstorms.github.io/node-playground/ontouchstart/2016/02/04/versions.js
if(typeof process === 'undefined' ) { // browser 
  console.log(navigator.userAgent);
} 
else { // node.js
  console.log(process.versions);
}
```

Now you can pipe it.

Input
```shell
curl -fsSL  \
  https://bigdata-mindstorms.github.io/node-playground/ontouchstart/2016/02/04/versions.js | \
  docker run --rm -a stdin -a stdout -i ontouchstart/docker-node:v4.2.6 node
```

Output
```shell
$ curl -fsSL  \
>   https://bigdata-mindstorms.github.io/node-playground/ontouchstart/2016/02/04/versions.js | \
>   docker run --rm -a stdin -a stdout -i ontouchstart/docker-node:v4.2.6 node
{ http_parser: '2.5.0',
  node: '4.2.6',
  v8: '4.5.103.35',
  uv: '1.8.0',
  zlib: '1.2.8',
  ares: '1.10.1-DEV',
  modules: '46',
  openssl: '1.0.2e' }
```

Input
```shell
curl -fsSL  \
  https://bigdata-mindstorms.github.io/node-playground/ontouchstart/2016/02/04/versions.js | \
  docker run --rm -a stdin -a stdout -i node node
```

Output
```shell
$ curl -fsSL  \
>   https://bigdata-mindstorms.github.io/node-playground/ontouchstart/2016/02/04/versions.js | \
>   docker run --rm -a stdin -a stdout -i node node
{ http_parser: '2.6.0',
  node: '5.5.0',
  v8: '4.6.85.31',
  uv: '1.8.0',
  zlib: '1.2.8',
  ares: '1.10.1-DEV',
  icu: '56.1',
  modules: '47',
  openssl: '1.0.2e' }
```

Input
```shell
curl -fsSL  \
  https://bigdata-mindstorms.github.io/node-playground/ontouchstart/2016/02/04/versions.js | \
  docker run --rm -a stdin -a stdout -i node:4.2.6 node
```

Output
```shell
$ curl -fsSL  \
>   https://bigdata-mindstorms.github.io/node-playground/ontouchstart/2016/02/04/versions.js | \
>   docker run --rm -a stdin -a stdout -i node:4.2.6 node
{ http_parser: '2.5.0',
  node: '4.2.6',
  v8: '4.5.103.35',
  uv: '1.8.0',
  zlib: '1.2.8',
  ares: '1.10.1-DEV',
  icu: '56.1',
  modules: '46',
  openssl: '1.0.2e' }
```

Source code: [versions.js](versions.js)

Browser test: [versions.html](https://bigdata-mindstorms.github.io/node-playground/ontouchstart/2016/02/04/versions.html)
