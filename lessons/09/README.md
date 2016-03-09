# Function that returns functions

```javascript
$ node
> (function () { return function () { return 'A function that returns a function'; }; })
[Function]
> (function () { return function () { return 'A function that returns a function'; }; })()
[Function]
> (function () { return function () { return 'A function that returns a function'; }; })()()
'A function that returns a function'
```

```javascript
$ node
> (function () { console.log('This is still a function'); return function () { return 'A function that returns a function'; }; })
[Function]
> (function () { console.log('This is still a function'); return function () { return 'A function that returns a function'; }; })()
This is still a function
[Function]
> (function () { console.log('This is still a function'); return function () { return 'A function that returns a function'; }; })()()
This is still a function
'A function that returns a function'
```

```javascript
> (function (x) { console.log(`${x} + y = ?`); return function (y) { console.log(`${x} + ${y} = ?`); return x + y; }; })
[Function]
> (function (x) { console.log(`${x} + y = ?`); return function (y) { console.log(`${x} + ${y} = ?`); return x + y; }; })(3)
3 + y = ?
[Function]
> (function (x) { console.log(`${x} + y = ?`); return function (y) { console.log(`${x} + ${y} = ?`); return x + y; }; })(3)(4)
3 + y = ?
3 + 4 = ?
7
> (function (x) { console.log(`${x} + y = ?`); return function (y) { console.log(`${x} + ${y} = ?`); return x + y; }; })(4)
4 + y = ?
[Function]
> (function (x) { console.log(`${x} + y = ?`); return function (y) { console.log(`${x} + ${y} = ?`); return x + y; }; })(4)(3)
4 + y = ?
4 + 3 = ?
7
```			

Practice: https://github.com/bigdata-mindstorms/node-playground/issues/12
