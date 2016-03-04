# 04: JavaScript literals 

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Literals)

JavaScript literals are fixed values, not variables, that you literally provide in your script.

- Array literals
- Boolean literals
- Floating-point literals
- Integers
- Object literals
- RegExp literals
- String literals
- [Template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) (new in ES6)

We are going to practice with them in node REPL.

```javascript
$ node
> ["A", "B", "C"] // array literal
[ 'A', 'B', 'C' ]
> [1, 2, 3] // array literal
[ 1, 2, 3 ]
> ['A', 'B', 'C'] // array literal
[ 'A', 'B', 'C' ]
> ['A', 2, 3] // array literal
[ 'A', 2, 3 ]
> ['A', 2, true] // array literal
[ 'A', 2, true ]
> ['A', 2, true, false] // array literal
[ 'A', 2, true, false ]
> true // boolean literal
true
> True // boolean literal
ReferenceError: True is not defined
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
> false // boolean literal
false
> 3.1415926 // Floating-point literals
3.1415926
> -.123456789 // Floating-point literal
-0.123456789
> -3.1E+12 // Floating-point literal
-3100000000000
> -3.1e+12 // Floating-point literal
-3100000000000
> -3.1e-12 // Floating-point literal
-3.1e-12
> .1e-12 // Floating-point literal
1e-13
> 0 // integer literal decimal, base 10
0
> 117 // integer literal decimal, base 10
117
> -345 // integer literal decimal, base 10
-345
> 010 // integer literal ocatal, base 8
8
> 011 // integer literal ocatal, base 8
9
> 0100 // integer literal ocatal, base 8
64
> 0x0 // integer literal hexadecimal, base 16
0
> 0x1 // integer literal hexadecimal, base 16
1
> 0x10 // integer literal hexadecimal, base 16
16
> 0x100 // integer literal hexadecimal, base 16
256
> 0x1000 // integer literal hexadecimal, base 16
4096
> 0b0 // integer literal binary, base 2
0
> 0b1 // integer literal binary, base 2
1
> 0b10 // integer literal binary, base 2
2
> 0b100 // integer literal binary, base 2
4
> 0b101 // integer literal binary, base 2
5
> 0b100 // integer literal binary, base 2
4
> 0b1000 // integer literal binary, base 2
8
> 0b10000 // integer literal binary, base 2
16
> { name: "Sam" }
{ name: 'Sam' }
> { manyCars: {a: "Saab", "b": "Jeep"}, 7: "Mazda" }
{ '7': 'Mazda', manyCars: { a: 'Saab', b: 'Jeep' } }
> /A/ // A regex literal is a pattern enclosed between slashes. 
/A/
> "ABC".replace(/A/, 'B') // replace A with B
'BBC'
> "foo"
'foo'
> 'bar'
'bar'
> "1234"
'1234'
> "one line \n another line"
'one line \n another line'
> "John's cat"
'John\'s cat'
> "\u6851"
'桑'
> "\u{6851}"
'桑'
> `1 + 1 = ${1 + 1}` // template literal new in ES6
'1 + 1 = 2'
```

Practice more in https://github.com/bigdata-mindstorms/node-playground/issues/6.
