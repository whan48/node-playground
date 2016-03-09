# Logical values and operators

[Logical values](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)

```javascript
$ node
> true
true
> false
false
> Boolean(0)
false
> Boolean(1)
true
> Boolean(2)
true
> Boolean('')
false
> Boolean('abc')
true
> Boolean("")
false
> Boolean("abc")
true
> undefined
undefined
> Boolean(undefined)
false
> null
null
> Boolean(null)
false
```

[Logical operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators)


Logical AND

```javascript
$ node
> true && false
false
> true && true
true
> false && true
false
> false && false
false
```

Logical OR

```javascript
$ node
> true || true
true
> true || false
true
> false || true
true
> false || false
false 
```

Logical NOT

```javascript
$ node
> !true
false
> !false
true
> !! true
true
> !! false
false
```

[Comparison operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators)

```javascript
$ node
> 1 == 1
true
> 1 == '1'
true
> 1 === '1'
false
> "1" == 1
true
> "1" === 1
false
> "1" === '1'
true
> "1" == '1'
true
```		

```javascript
$ node
> 1 == 1
true
> 1 === 1
true
> !(1 == 1)
false
> !(1 === 1)
false
> 1 == '1'
true
> !(1 == '1')
false
> 1 === '1'
false
> !(1 === '1')
true
> 1 != 1
false
> 1 != '1'
false
> 1 !== '1'
true
> 1 != 2
true
> 1 !== 2
true 
```

```javascript
$ node 
> 1 > 2
false
> 1 > '2'
false
> 1 < 2
true
> 1 < '2'
true
```

```javascript
$ node
> 1 >= 2
false
> 1 >= '2'
false
> 1 <= '2'
true
> 1 <= 2
true
```

```javascript
$ node
> 1 <= 1
true
> 1 <= '1'
true
> 1 >= 1
true
> 1 >= '1'
true
```

Practice: https://github.com/bigdata-mindstorms/node-playground/issues/13
