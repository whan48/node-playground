# Object.create

We learned how to create an object with constructor and add more properties to the prototype

```javascript
$ node
function Person(firstname) { this.firstname = firstname }
undefined
> adam = new Person('Adam')
Person { firstname: 'Adam' }
> adam.lastname
undefined
> Person.prototype.lastname = 'Smith'
'Smith'
> Person.prototype
Person { lastname: 'Smith' }
> adam
Person { firstname: 'Adam' }
> adam.lastname
'Smith'
```

To make sure that constructor did run when we call `new Person('Adam')`, let's add `console.log`
```javascript
> function Person(firstname) { this.firstname = firstname; console.log(`Hi ${firstname}`) }
undefined
> adam = new Person('Adam')
Hi Adam
Person { firstname: 'Adam' }
> john = new Person('John')
Hi John
Person { firstname: 'John' }
```

Now let's add prototype
```javascript
> Person.prototype.lastname = 'Smith'
'Smith'
> Person.prototype.fullname = function () { return `${this.firstname} ${this.lastname}` }
[Function]
> adam.fullname()
'Adam Smith'
> john.fullname()
'John Smith'
```

There is another way to create a `Person` by calling
[Object.create](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create)

```javascript
> sam = Object.create(Person.prototype)
Person {}
> sam.lastname
'Smith'
> sam.fullname()
'undefined Smith'
```

We created a new object `sam` from `Person.prototype`, i.e., it has the same properties
`lastname` and `fullname()`. However, if we create an object this way, the constructor 
`Person(firsname)` is not called, so the property `firstname` is undefined.

We can assign the `firstname` property directly to `sam`:

```javascript
> sam.firstname = 'Sam'
'Sam'
> sam
Person { firstname: 'Sam' }
> sam.fullname()
'Sam Smith'
```

Practice and discussion:  https://github.com/bigdata-mindstorms/node-playground/issues/21
