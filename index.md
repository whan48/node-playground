---
layout: d3
---
# node-playground

## Ryan Dahl: Original Node.js presentation (2009)

[Youtube](https://www.youtube.com/watch?v=ztspvPYybIY)

<video src="https://github.com/bigdata-mindstorms/node-playground/raw/gh-pages/hello_world.mp4" controls="true"></video>

```javascript
var sys = require("sys");

setTimeout(function () {
  sys.puts("world");
}, 2000);
sys.puts("hello");
```

```shell
$ node hello_world.js 
(node) sys is deprecated. Use util instead.
(node) util.puts is deprecated. Use console.log instead.
hello
world
```
