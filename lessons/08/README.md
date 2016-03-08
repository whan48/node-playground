# Object literals revisited (with functions)

```javascript
$ node
> { name : 'test', hi : function () { return 'hi'; }}
{ name: 'test', hi: [Function] }
> ({ name : 'test', hi : function () { return 'hi'; }})
{ name: 'test', hi: [Function] }
> ({ name : 'test', hi : function () { return 'hi'; }}).hi
[Function]
> ({ name : 'test', hi : function () { return 'hi'; }})['hi']
[Function]
> ({ name : 'test', hi : function () { return 'hi'; }})["hi"]
[Function]
> ({ name : 'test', hi : function () { return 'hi'; }}).hi()
'hi'
> ({ name : 'test', hi : function () { return 'hi'; }})['hi']()
'hi'
> ({ name : 'test', hi : function () { return 'hi'; }})["hi"]()
'hi'
> ({ name : 'test', hi : function (name) { return `hi, ${name}`; }}).hi
[Function]
> ({ name : 'test', hi : function (name) { return `hi, ${name}`; }}).hi('ontouchstart')
'hi, ontouchstart'
> ({ name : 'test', hi : function (name) { return `hi, ${name}, my name is ${this.name}.`; }}).hi
[Function]
> ({ name : 'test', hi : function (name) { return `hi, ${name}, my name is ${this.name}.`; }}).hi('ontouchstart')
'hi, ontouchstart, my name is test.'
```

In the last example above, there are quite a few `name`s in it. Now let's take a deeper look.

- `name : 'test'` means this object literal has a name called `'test'`.
- `function (name)` means the function (which is the value of the `hi` attribute) takes an input called `name`.
- `hi, ${name},` means the return will use template and take the value from the input to the function (in this case, it is `'ontouchstart'`.) 
- `my name is ${this.name}.` means the function should know the value of `name` in its __context__ (in this case, it is `'test'`.)

That is why the output is 
```
'hi, ontouchstart, my name is test.'
```

What makes JavaScript special and interesting is that in JavaScript, for a function, besides the input it takes, 
there is also a hidden 'context' where the function "keeps" extra information. This context is just a JavaScript object, 
which we will give it a nice name called `this`.

If a function is not part of an object like the example above, we will call this function a global function. 
For a global function, the context `this` is the same as `global`. To test on this, in node.js console, just 
type following

```javascript
$ node
> this
> global
```

They should give you the same output.

You can also test like this:

OS X:
```javascript
> process.platform
'darwin'
> global.process.platform
'darwin'
> this.process.platform
'darwin'
> (function () { return this.process.platform })()
'darwin'
```

Docker:

```javascript
$ docker run --rm -it ontouchstart/docker-node:v4.3.2 node
> process.platform
'linux'
> global.process.platform
'linux'
> this.process.platform
'linux'
> (function () { return this.process.platform })()
'linux'
```

Practice: https://github.com/bigdata-mindstorms/node-playground/issues/11
