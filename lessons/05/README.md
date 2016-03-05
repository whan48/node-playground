# 05: JavaScript object literals 

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Literals)

Let's practice more JavaScript object literals in node REPL.

```javascript
$ node
> {org:'bigdata-mindstorms',repo:'node-playground',issues:7}
{ org: 'bigdata-mindstorms', repo: 'node-playground', issues: 7 }
> {org:'bigdata-mindstorms',repo:'node-playground',issues:7,fun:true}
{ org: 'bigdata-mindstorms', repo: 'node-playground', issues: 7 }
> {org:'bigdata-mindstorms',repo:'node-playground',issues:7,fun:true} 
{ org: 'bigdata-mindstorms',
  repo: 'node-playground',
  issues: 7,
  fun: true }
> ({org:'bigdata-mindstorms',repo:'node-playground',issues:7,fun:true})['org']
'bigdata-mindstorms'
> ({org:'bigdata-mindstorms',repo:'node-playground',issues:7,fun:true})['repo']
'node-playground'
> ({org:'bigdata-mindstorms',repo:'node-playground',issues:7,fun:true})['issues']
7
> ({org:'bigdata-mindstorms',repo:'node-playground',issues:7,fun:true})['fun']
true
```

Remember, these are literal expressions typed into 
[REPL](https://github.com/bigdata-mindstorms/node-playground/tree/gh-pages/lessons/02). 
We have not learned variables and assignment `=` yet.  I understand that you want to learn more and move fast. 
But these basic concepts are **very important** for you to understand JavaScript the language and gain a solid
foundation for future growth as a master JavaScript programmer in node.js and browser.  

If you are a new student in programming (even 文科生) (or worse, a Java programmer who has tons of bad habit to be corrected. :smile:), you should practice more with your fingers and think more with your brain, instead of surfing the web, 
downloading code and packages without thinking and understanding. We will get there very quickly once you mastered the 
basics. (There are not many of them to learn, I promise. But you have to focus and practice.)

Now please go ahead make up more JavaScript object literals, show your practice, and ask your questions in 
https://github.com/bigdata-mindstorms/node-playground/issues/7.
