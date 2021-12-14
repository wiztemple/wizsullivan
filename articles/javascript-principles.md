---
title: Javascript Principles
publishedOn: 21 Nov 2021
readTime: 4 min read
author: Sullivan Wisdom
summary: Blockchain Technology is a new and innovative way to implement decentralization
slug: javascript-principles
---

## Thread of Execution
When JavaScript code runs, it:

* Goes through the code line by line and runs or executes each line - known as the **thread of execution**

* Saves 'data' like strings and arrays so we can use that data later - in its **memory**
  we can save code e.g function

```
var add2 = function(number) {
  return number + 2;
}
```

The input placeholder is known as a **parameter** while the value of the input placeholder is known as **argument**

for example, we have this function:

![sample code](/images/articles/carbon.svg)

JavaScript is gonna go through the code line by line => Thread of Execution
JavaScript is gonna have to save each variable, constant, function or anything that shows up while we are in the `multiplyBy2`  function. Like a place to store things declared in the `multiplyBy2` function, we call it local memory. we call it local cause it's only going to available while we run the `multiplyBy2` function.

### Execution Context
Created to run the code of a function, it has 3 parts
1. Thread of execution
2. memory
3. call stack

Javascript keeps track of what function is currently running(where's the thread of execution).
whenever JavaScript runs a function, it adds the function to a **call stack**.
When it's done running the function, it removes it from the **call stack**.
Whatever is on top of the **call stack**, that's the function we are currently running.
Whenever we hit the **return** keyword, that's a signal the unction has ended, so it's popped out of the **call stack**

Always at the bottom of the **call stack** is the global execution context

For example, lets say we have another function, lets call it **sum2** inside our function **multiplyBy2**, JS creates a new execution context for **sum2**, adds it to the top of the call stack and when its done running **sum2**, it returns to where that function was started i.e take it off the stack and we are back to where 
we started before, **multiplyBy2**.

That's the 3 core components of JavaScript

## Generalize Functions
why do we even have functions?

Parameters(placeholders) mean we don't need to decide what data to run our functionality on until we run 
the function
- then we provide an actual value(argument) when we run the function

Now suppose we have a function

![sample code](/images/articles/copyarrayandmultiplyby2.svg)