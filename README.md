# Learning Typescript using the AWS CDK

### Goals
- learn some typescript by writing infrastructure as code 
- deploy the infrastructure for an AWS static website  

### Resources 

https://www.youtube.com/watch?v=I_ftyDeHffE


### Notes 
- CDK is using cloudformation on the backside 

Levels of the CDK apps 

App -> stacks -> contruct -> resources 

stacks: you can have many different stacks in an application. ie: DB stack, frontend stack, backend stack

constructs: these are inside stacks, a construct is a reuseable cloud component (resource)