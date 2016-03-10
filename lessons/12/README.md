# Function as an object property 

If a function is part of an object, `this` becomes that object itself.

```javascript
$ node
> {name:'world',hi:function(){console.log(this);return this.hasOwnProperty('name')?`hello ${this.name}`:'hello'}}
{ name: 'world', hi: [Function] }
> ({name:'world',hi:function(){console.log(this);return this.hasOwnProperty('name')?`hello ${this.name}`:'hello'}})
{ name: 'world', hi: [Function] }
> ({name:'world',hi:function(){console.log(this);return this.hasOwnProperty('name')?`hello ${this.name}`:'hello'}}).hi
[Function]
> ({name:'world',hi:function(){console.log(this);return this.hasOwnProperty('name')?`hello ${this.name}`:'hello'}}).hi()
{ name: 'world', hi: [Function] }
'hello world'
```

Now `bind` it with an empty object `{}`

```javascript
> ({name:'world',hi:function(){console.log(this);return this.hasOwnProperty('name')?`hello ${this.name}`:'hello'}}).hi.bind({})
[Function: bound ]
> ({name:'world',hi:function(){console.log(this);return this.hasOwnProperty('name')?`hello ${this.name}`:'hello'}}).hi.bind({})()
{}
'hello'
```

You can see that `this` becomes empty `{}` and the return value is `'hello'`.

We can also `bind` it with another object `{name: 'you'}`

```javascript
> ({name:'world',hi:function(){console.log(this);return this.hasOwnProperty('name')?`hello ${this.name}`:'hello'}}).hi.bind({name: 'you'})
[Function: bound ]
> ({name:'world',hi:function(){console.log(this);return this.hasOwnProperty('name')?`hello ${this.name}`:'hello'}}).hi.bind({name: 'you'})()
{ name: 'you' }
'hello you'
> ({name:'world',hi:function(){console.log(this);return this.hasOwnProperty('name')?`hello ${this.name}`:'hello'}}).hi.call({name: 'you'})
{ name: 'you' }
'hello you'
> ({name:'world',hi:function(){console.log(this);return this.hasOwnProperty('name')?`hello ${this.name}`:'hello'}}).hi.apply({name: 'you'})
{ name: 'you' }
'hello you'
```

Practice: https://github.com/bigdata-mindstorms/node-playground/issues/16
