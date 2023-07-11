# typescript fundamentals 

What is typescript?
- superset of javascript 
- open source, maintained by microsoft

three parts: language, language server, and compiler 

why do developers want types?
- allows you to leave more intent on the page 

How to read this function?
a is a number, b is a number, and the function returns a number

```
function add(a: number, b: number): number { 

}
```

- you can move some kind of errors from runtime to compile time 

ex: values that are null or undefined, incomplete refactoring, arg becoming required 


## Compiling a typescript program 

Anatomy of a project

package.json - package manifest
tsconfig.json - compiler settings
index.ts - program

#### How to create a typescript projects 

``` npx tsc --init ```


# variables and values 

``` let age = 6; ```

- typescript can infer that age is a number, you cannot reassign age to a value that is a string, this is what typescript is supposed to catch 
- variables are born with types 

``` const age = 6; ``` 

- TS will make a more specific assumption here which is, you cannot change the number of age to anything other than 6 


There are scenarios where we need to declare a variable that will get its value assigned later. 
- we will be using a type annotation for that. 
ex: ``` let endTime: Date ```



# Objects 

an object is defined by two things 
- the names of the properties 
- the types of those properties


creating optional properties in objects 
ex: we have a parameter called chargeVoltage for a car class that is a number
- we can accomplish that using the "?"

```
let car: { 
    make: string,
    model: string,
    year: number,
    chargeVoltage?: number
}
```

# Array Types 

Defining an array 
``` const fileExtensions: string[] ```

Tuples 
- multi-element, ordered data structure, where position of each item has some special meaning or convention
- we can use desructure assignment also 
``` const [year, make, model] = myCar ``` 


# structural vs nominal 

what is type checking?
- making a comparison of what we are expecting to receive, and what we actually receive
ex: we have a function that expects and object but we pass in a string

static vs dynamic type systems 
- static means that you are writing the types in your code 
- dynamic performs type equivalence at run time 

Nominal type systems are all about names

# Union and Intersection types 

Union Types: allow you to specify multiple possible values for a single variable using the | 

ex: 

``` function combine(input1: string | number) { 
    return input1
}
```

Intersection types: creates a new type by combining multiple existing types. has all the features of an existing type 

``` type typeAB = typeA & typeB; ```


# Never type 

- use this as the return type for a function expression or an arrow function that always throws an exception or one that never returns 
- a function that is used to terminate a program 

