# Introduction to the Module
  - Typescript is just javascript but with added feature to allow you to define what input to expect in your variables or parameters.

# The rationale behind TypeScript.
  - Typescript is a superset so it extends to javascript adding more feature to javascript such as static typing.

# Installing Typescript
  - The compiler checks and turn the typescript back into vanilla javascript. It communicates any errors in the code.

# Base Types, Primitives, Arrays, Object Types, and Type Inference
  - Primitives are the core value types those include numbers strings and booleans and those come from JS. Arrays and objects considered a more complex type of type of assignment. Type inference referes to when you declare a variable, what ever type you assign it that is the type that is inferred.

# Union Types, Type Aliases, Function Types, Generics, Class structures, and Interfaces.
  - Union types allow for the type of the variable to accept multiples types that you input or even "any" type but that is less recommended. It is more common to define the specific inputs you expect. Function types infers the return value of the function based on the input, or it can be set manually out side the parameters parantheses. Funtions that do not have return value, are inferred as void, basically null or undefined. Generic types allow functions to to look in side arrays and based on whats inside, out put a value of the same kind. It infers the return value is the same value as the input value and will catch errors if they do not match. Classes allow us to define properties with all the types before hand. Class properties can be defined as private or public. Interfaces feature allows your class to have a certain structure. 

# Configuring the TypeScript Compiler.
  - npx tsc --init allows you to config typescript configuration file. Options can be toggled in the file and adjust to what is needed.