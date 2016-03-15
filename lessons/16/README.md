# Prototype chain

Let's review how to create an object with constructor

```javascript
$ node
function Person(firstname) { this.firstname = firstname }
undefined
> adam = new Person('Adam')
Person { firstname: 'Adam' }
> adam.lastname
undefined
```

Now comes a "magic" :tophat: The constructor `Person` has a special property called `prototype`

```javascript
> Person.prototype
Person {}
```

We can add property to the `prototype` object

```javascript
> Person.prototype.lastname = 'Smith'
'Smith'
> Person.prototype
Person { lastname: 'Smith' }
```

What does this mean?

```javascript
> adam
Person { firstname: 'Adam' }
> adam.lastname
'Smith'
```

So now `adam` has a `lastname`. However, `adam` doesn't __own__ the property `lastname`, 
as we can tell from following

```javascript
> adam.hasOwnProperty('lastname')
false
> adam.hasOwnProperty('firstname')
true
```

The `lastname` belongs to the `Person.prototype`. `adam` can access it via something we called 
[prototype chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)

```javascript
> adam.lastname
'Smith'
```

(We use a human metaphor, it is like Adam doesn't "own" his lastname, his father does, 
or his father's father ... :smile: )

Let's define a function 

```javascript
> function fullname () { return `I am ${this.firstname} ${this.lastname}` }
undefined
```

We can bind it to adam

```javascript
> fullname.bind(adam)()
'I am Adam Smith'
> fullname.call(adam)
'I am Adam Smith'
> fullname.apply(adam)
'I am Adam Smith'
```

We can also add `fullname()` to the `Person.prototype`

```javascript
> Person.prototype.fullname = fullname
[Function: fullname]
> Person.prototype
Person { lastname: 'Smith', fullname: [Function: fullname] }
```

Now `adam` can call `fullname()` like this

```javascript
> adam.fullname()
'I am Adam Smith'
```

As you expect, `adam` doesn't __own__ the function property `fullname`

```javascript
> adam.hasOwnProperty('fullname')
false
```

Practice and discussion:  https://github.com/bigdata-mindstorms/node-playground/issues/20
