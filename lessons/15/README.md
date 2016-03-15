# `new` and Object Constructor

From previous lessons, we learned a few ways to create object literals and modify them

```javascript
$ node
> person1 = { firstname: 'Albert'}
{ firstname: 'Albert' }
> person2 = {}
{}
> (function () { this.firstname = 'Bob'; }).bind(person2)()
undefined
> person2
{ firstname: 'Bob' }
> person3 = {}
{}
> (function () { this.firstname = 'Charlie'; }).call(person3)
undefined
> person3
{ firstname: 'Charlie' }
> (function () { this.firstname = 'David'; }).apply(person4)
undefined
> person4
{ firstname: 'David' } 
```

If we add `return this`, we can also __create__ new objects like this

```javascript
> person5 = (function (firstname) { this.firstname = firstname; return this;}).bind({})('Ethan');
{ firstname: 'Ethan' }
> person5
{ firstname: 'Ethan' }
> person6 = (function (firstname) { this.firstname = firstname; return this;}).call({}, 'Fred');
{ firstname: 'Fred' }
> person7 = (function (firstname) { this.firstname = firstname; return this;}).apply({}, ['George']);
{ firstname: 'George' }
```

Notice the difference between `call` and `apply`, the second argument of `apply` has to be an array, 
even the array has only one element `['George']`.


Following function is called a __constructor__  (the capitalized first letter is a __convention__):

```javascript
> function Person(firstname) { this.firstname = firstname }
undefined
```

Notice that it has no return value, but you can use it to __update__ an object like this
```javascript
> person8 = {}
{}
> Person.call(person8, 'Herbert')
undefined
> person8
{ firstname: 'Herbert' } 
```

Now let's introduce a __new__ operator called [new](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new) :smile:

```javascript
> person9 = new Person('James')
Person { firstname: 'James' }
```  

It looks just like all the other `person` objects we have created, but there are some differences 
that we will discuss in details later.  

First of all, `person9` was created with a constructor called `Person` but `person8` and the others 
were created as object literals, hence the constructor is `Object`.

```javascript
> person8.constructor
[Function: Object]
> person9.constructor
[Function: Person]
```

We will discuss more interesting features about object and object constructor in the coming lessons.

Practice and discussion:  https://github.com/bigdata-mindstorms/node-playground/issues/19
