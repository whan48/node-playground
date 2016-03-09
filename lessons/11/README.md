# bind this (and call/apply)

Let's come back to the concept of `this`, which we have [practiced before](https://github.com/bigdata-mindstorms/node-playground/blob/gh-pages/lessons/07/README.md).

(Note: you might want to learn a little about 
[Conditional (ternary) Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator) 
to understand following code.)

```javascript
> (function () { return this.hasOwnProperty('name') ? `Hello ${this.name}` : 'Hello world'; })
[Function]
> (function () { return this.hasOwnProperty('name') ? `Hello ${this.name}` : 'Hello world'; })()
'Hello world'
> name = 'ontouchstart'
'ontouchstart'
> (function () { return this.hasOwnProperty('name') ? `Hello ${this.name}` : 'Hello world'; })()
'Hello ontouchstart'
> delete name
true
> name
ReferenceError: name is not defined
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
> typeof name
'undefined'
> this.hasOwnProperty('name')
false
> (function () { return this.hasOwnProperty('name') ? `Hello ${this.name}` : 'Hello world'; })()
'Hello world'
```

If you call a function, `this` is the same as `global`. That is why you will get `this.name` when the `name` is set
in the REPL. You can delete it by `delete name`.

However, you can __bind__ `this` to a different object with the [bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) function like following

```javascript
$ node
> (function () { return this.hasOwnProperty('name') ? `Hello ${this.name}` : 'Hello world'; }).bind({name: 'ontouchstart'})
[Function: bound ]
> (function () { return this.hasOwnProperty('name') ? `Hello ${this.name}` : 'Hello world'; }).bind({name: 'ontouchstart'})()
'Hello ontouchstart'
```
You can also bind `this` to a different object __and__ call the function with
[call](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call) 
and
[apply](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)
functions.
(These two functions behave the same if the function does not take any arguments as input. 
We will discuss their difference later in the future.)

```javascript
$ node
> (function () { return this.hasOwnProperty('name') ? `Hello ${this.name}` : 'Hello world'; }).call({name: 'ontouchstart'})
'Hello ontouchstart'
> (function () { return this.hasOwnProperty('name') ? `Hello ${this.name}` : 'Hello world'; }).apply({name: 'ontouchstart'})
'Hello ontouchstart'
```

Practice: https://github.com/bigdata-mindstorms/node-playground/issues/14
