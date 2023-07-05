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