# Pipes

  # Intro & Why Pipes are Useful
  - 
    - they are useful for transforming the output in our screen.
  # Using Pipes
    - we use pipe symbol `|` and then the pipe name we want to use
  # Parametrizing Pipes
    - we parameterize the pipe by adding a colon : and then the parameter. But only if they pipe can take a parameter.
  # Where to learn more about Pipes
    - we can find the built in pipes at angular.io
  # Chaining Multiple Pipes
    - we can add multiple pipes by adding another | and adding it. But the order matters as the pipe works on the output of the previous pipe.
  # Creating a Custom Pipe
    - Create a pipe by creating a new file customPipe.pipe.ts. We export the class customPipe and implement PipeTransform. inside we use the transform method to write our pipe code. we also at the @pipe({ name: 'customName'})  and give it a name. We add it to our app module declarations. Now we can use it in our html file.
  # Parametrizing a Custom Pipe
    - we can add parameters by adding a second arguement in our transform element, and we can continue adding more arguements for more parameters.
  # Example: Creating a Filter Pipe
    - We can also create a pipe with the cli `ng generate pipe <name>` it does all the imports and exports. We just fill out the transform with our filter code. We filter based on the input.
  # Pure and Impure Pipes(or: How to "fix" the Filter Pipe)
    - Angular does not run pipe everytime there is changes in on our page. But if you do want it to run on changes in the @pipe set <pure: false> but this might impact performance issues.
  # Understanding the "async" Pipe
    - The async pipe allows the user to use string interpolation with an async variable or method and output the result. instead of outputting object object.
  # Assignment: Pipes