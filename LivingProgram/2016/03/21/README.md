## 2016/03/21

### [test.js](https://github.com/bigdata-mindstorms/node-playground/blob/gh-pages/LivingProgram/2016/03/21/test.js)
```javascript
console.log(process.versions);
```

### [test.sh](https://github.com/bigdata-mindstorms/node-playground/blob/gh-pages/LivingProgram/2016/03/21/test.sh)
> Make the output go to test.output

```javascript
#!/bin/sh
node test.js | tee test.output
```

### Making [test.sh](https://github.com/bigdata-mindstorms/node-playground/blob/gh-pages/LivingProgram/2016/03/21/test.sh) executable
```javascript
chmod u+x test.sh
```
### Output [test.output](https://github.com/bigdata-mindstorms/node-playground/blob/gh-pages/LivingProgram/2016/03/21/test.output)
```javascript
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
