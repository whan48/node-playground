# JavaScript functions

Now let's start to learn JavaScript functions from the most basic examples. We will do practice first. 
Later we can discuss theories behind them. 

```javascript
$ node
> (function () { return "hello world"; }) // a function that returns "hello world", it doens't have a name
[Function]
> (function () { return "hello world"; })() // how you call the function
'hello world'
> (function (name) { return `hello ${name}`; }) // a function that take an argument name
[Function]
> (function (name) { return `hello ${name}`; })('ontouchstart') // how you call the function
'hello ontouchstart'
> (function (x, y) { return x + y; }) // a function that adds two numbers
[Function]
> (function (x, y) { return x + y; })(1, 2) // how you call the function
3
```
