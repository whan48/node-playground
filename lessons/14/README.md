# Variable declaration and assignment

As our REPL expressions getting longer and longer, it is time to introduce
[variable statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var) ([变量声明语句](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/var)),
which declares a variable, optionally initializing it to a value.

A variable is a reference to some value. 
```javascript
$ node
> a // a is not declared, it is an error
ReferenceError: a is not defined
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
```

We can declare a variable with this statement
```javascript
> var a
undefined
```
This is a statement, not a expression. Since the statement has no value, REPL
prints out `undefined`.

```javascript
> a
undefined
```
Since we didn't assign `a` any value, REPL prints out `undefined`.

```javascript
> a = 3
3
> a
3
```
The `=` is an [assignment operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment_Operators) 
which assigns the value of its right operand to its left operand. 
So REPL prints out the value of `a`, which is `3`.

We can delare a variable with an initial value

```javascript
> var b = 4
undefined
```
Notice this is __not__ an assignment operator but a [variable statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var). 
Itself has no value, so REPL prints out `undefined`.

But after initialization, `b` will have a value
```javascript
> b
4
```

We can declare a variable initialized with an expression
```javascript
> var c = a + b
undefined
> c
7
```

The variable is declared before it is initialized with the expression. 
So even the evaluation has an error, the variable is still __declared__,
although the value is `undefined`.
```javascript
> var d = a + f
ReferenceError: f is not defined
    at repl:1:13
    at REPLServer.defaultEval (repl.js:252:27)
    at bound (domain.js:287:14)
    at REPLServer.runBound [as eval] (domain.js:300:12)
    at REPLServer.<anonymous> (repl.js:417:12)
    at emitOne (events.js:82:20)
    at REPLServer.emit (events.js:169:7)
    at REPLServer.Interface._onLine (readline.js:211:10)
    at REPLServer.Interface._line (readline.js:550:8)
    at REPLServer.Interface._ttyWrite (readline.js:827:14)
> d
undefined
> f
ReferenceError: f is not defined
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
```
We hope you can understand the difference between `undeclared` error and 
`undefined` value from the example above.

You can also assign a function to a variable or initialize a variable 
with a function 
```
> f = function () { return 4;}
[Function]
> d 
undefined
> d = a + f
'3function () { return 4;}'
```
The last output might surprise you. How can you add a number to a function? It seems that the
function value is converted into a string so it can be "added" to a number, which is also converted into
a string `"3"`, just like
```javascript
> '3' + 'function () { return 4;}'
'3function () { return 4;}'
```

Here is "shortcut" to show the string representation of a function:
```javascript
> f
[Function]
> ''+f
'function () { return 4;}'
```

Practice: https://github.com/bigdata-mindstorms/node-playground/issues/18
