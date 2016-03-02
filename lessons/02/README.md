# 02: REPL

[Wikipedia](https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop)

> A Read-Eval-Print Loop (REPL), also known as an interactive toplevel or language shell, is a simple, interactive computer programming environment that takes single user inputs (i.e. single expressions), evaluates them, and returns the result to the user; a program written in a REPL environment is executed piecewise.

> In a REPL, the user enters one or more expressions (rather than an entire compilation unit) and the REPL evaluates them and displays the results.

> The **R**ead function accepts an expression from the user, and parses it into a data structure in memory. 

> The **E**val function takes this internal data structure and evaluates it. 

> The **P**rint function takes the result yielded by eval, and prints it out to the user. If it is a complex expression, it may be pretty-printed to make it easier to understand. 

REPL is the most effective way to learn computer basics and explore a new computer environment in a short amount of time.
A skill that is worth your time to practice on.

Once you have [installed node.js on your system](https://github.com/bigdata-mindstorms/node-playground/blob/gh-pages/lessons/01/README.md), type this to start `node`

```shell
$ node
```

This will bring you into node REPL
```shell
> 
```

where you can type command.  To exit, type
```shell
> process.exit()
$ 
```

Here are some examples for you to play with the REPL ideas. `// ...` is a JavaScript comment.

```shell
$ node
> 1 // reads the expression 1, prints back its value 1
1
> 2 // reads the expression 1, prints back its value 2
2
> 1 + 2 // reads the expression `1 + 2`, evaluates it, prints back its value 3 
3
> x = 1 // reads the expression x = 1, assign value 1 to variable x, prints back its value 1
1
> x // reads the expression x, evaluates it, prints back value 1
1
> x + 2 // reads the expression `x + 1`, evaluates it, prints back value 3
3
> process.exit()
$ 
```

You can practice more and post your results in https://github.com/bigdata-mindstorms/node-playground/issues/4.
