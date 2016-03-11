# Functions that turn `this`

If a function is part of an object, `this` becomes that object itself. And we can also let the function retun `this`

```javascript
$ node
> ({name: 'test', hi: function () { return this;}})
{ name: 'test', hi: [Function] }
> ({name: 'test', hi: function () { return this;}}).hi
[Function]
> ({name: 'test', hi: function () { return this;}}).hi()
{ name: 'test', hi: [Function] }
```

You can also bind the function to a different context:

```javascript
$ node
> ({name: 'test', hi: function () { return this;}}).hi.bind({name: 'you'})
[Function: bound ]
> ({name: 'test', hi: function () { return this;}}).hi.bind({name: 'you'})()
{ name: 'you' }
> ({name: 'test', hi: function () { return this;}}).hi.call({name: 'you'})
{ name: 'you' }
> ({name: 'test', hi: function () { return this;}}).hi.apply({name: 'you'})
{ name: 'you' }
```

You can also have a function that change its context

```javascript
$ node
> ({name: 'test', set: function(name) { this.name = name; return this; }, hi: function () { return this;}})
{ name: 'test', set: [Function], hi: [Function] }
> ({name: 'test', set: function(name) { this.name = name; return this; }, hi: function () { return this;}}).set('you')
{ name: 'you', set: [Function], hi: [Function] }
> ({name: 'test', set: function(name) { this.name = name; return this; }, hi: function () { return this;}}).set('you').hi()
{ name: 'you', set: [Function], hi: [Function] }
```

If we keep this pattern, we can use call other functions for the "side effect", such as
```javascript
$ node
> ({name: 'test', set: function(name) {this.name=name;return this;}, hi: function(){console.log(`hi ${this.name}`);return this;}})
{ name: 'test', set: [Function], hi: [Function] }
> ({name: 'test', set: function(name) {this.name=name;return this;}, hi: function(){console.log(`hi ${this.name}`);return this;}}).hi()
hi test
{ name: 'test', set: [Function], hi: [Function] }
> ({name: 'test', set: function(name) {this.name=name;return this;}, hi: function(){console.log(`hi ${this.name}`);return this;}}).hi().hi()
hi test
hi test
{ name: 'test', set: [Function], hi: [Function] }
> ({name: 'test', set: function(name) {this.name=name;return this;}, hi: function(){console.log(`hi ${this.name}`);return this;}}).hi().hi().hi()
hi test
hi test
hi test
{ name: 'test', set: [Function], hi: [Function] }
> ({name: 'test', set: function(name) {this.name=name;return this;}, hi: function(){console.log(`hi ${this.name}`);return this;}}).hi().set('you').hi()
hi test
hi you
{ name: 'you', set: [Function], hi: [Function] }
```

This kind of pattern in which a function modifies its context and then return it
```
set: function(name) {this.name=name;return this;}
```
it a powerful way to allow a technique calld __chain syntax__ (__method chaining__) , which is used in libraries like 
[jQuery](http://ejohn.org/blog/ultra-chaining-with-jquery/) and [d3.js](http://alignedleft.com/tutorials/d3/chaining-methods).


Practice: https://github.com/bigdata-mindstorms/node-playground/issues/17
