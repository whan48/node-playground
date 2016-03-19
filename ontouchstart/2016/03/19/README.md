# 2016/03/19

## [test.js](test.js)

```javascript
console.log(process.versions);
```

## [test.sh](test.sh)

```shell
#!/bin/sh
node test.js | tee test.output
```
[RTFM](http://man7.org/linux/man-pages/man1/tee.1.html)

Output goes to both stdout and [test.output](test.output).

## Make [test.sh](test.sh) executable

```shell
chmod u+x test.sh
```
[RTFM](http://man7.org/linux/man-pages/man1/chmod.1.html)

### output [test.output](test.output)

```
{ http_parser: '2.5.2',
  node: '4.4.0',
  v8: '4.5.103.35',
  uv: '1.8.0',
  zlib: '1.2.8',
  ares: '1.10.1-DEV',
  icu: '56.1',
  modules: '46',
  openssl: '1.0.2g' }
```
