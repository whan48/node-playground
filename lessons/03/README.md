# 03: JavaScript Primitive Data Types

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Data_types)

JavaScript has six data types that are primitives:

- Boolean
- Null
- Undefined
- Number
- String
- Symbol (new in ECMAScript 6)

We are going to practice with them in node REPL.

```javascript
$ node
> true
true
> false
false
> !true
false
> !false
true
> typeof x
'undefined'
> x
ReferenceError: x is not defined
    at repl:1:1
    at REPLServer.defaultEval (repl.js:252:27)
    at bound (domain.js:287:14)
    at REPLServer.runBound [as eval] (domain.js:300:12)
    at REPLServer.<anonymous> (repl.js:417:12)
    at emitOne (events.js:82:20)
    at REPLServer.emit (events.js:169:7)
    at REPLServer.Interface._onLine (readline.js:211:10)
    at REPLServer.Interface._line (readline.js:550:8)
    at REPLServer.Interface._ttyWrite (readline.js:827:14)
> typeof true
'boolean'
> typeof false
'boolean'
> 1234
1234
> -1234
-1234
> typeof 1234
'number'
> Math.PI
3.141592653589793
> typeof Math.PI
'number'
> "1234"
'1234'
> '1234'
'1234'
> typeof "1234"
'string'
> typeof '1234'
'string'
> typeof 'A'
'string'
> typeof 'ABC'
'string'
> 42 / +0
Infinity
> typeof 42 / +0
NaN
> 42 / -0
-Infinity
> typeof 42 / -0
NaN
> Symbol("foo")
Symbol(foo)
> Symbol("bar")
Symbol(bar)
> typeof Symbol("foo")
'symbol'
```

Practice more in https://github.com/bigdata-mindstorms/node-playground/issues/5.
