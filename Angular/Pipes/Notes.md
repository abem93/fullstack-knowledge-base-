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
    - 
  # Example: Creating a Filter Pipe
    - 
  # Pure and Impure Pipes(or: How to "fix" the Filter Pipe)
    - 
  # Understanding the "async" Pipe
    - 
  # Assignment: Pipes