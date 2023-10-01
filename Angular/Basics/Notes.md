# The Basics
  # Module Introduction
  # Angular App Gets Loaded
  'ng new <name> --no-strict'
  no routing

  'ng s -o'
  # Components are Important
  - Angular apps are built from components.
  # Creating a new Component
  - Component is a TS class, created folder structure and basic code framework for a component.
  # AppModule and Component Declaration
  # Using Custom Components
  # Creating Components with CLI
  - ng g c <name>
  # Working with Component Templates
  - Template or templateURL is needed.
  # Working with Component Styles
  - Styles can be put on a seperate file or in on the component typescript file.
  # Understanding the Component Selector
  - selector can be selected by element or attribute. Can not select by id or other psuedo-selectors
  # Component Basics
  - added components
  # Data Binding
  - communication between typescript code and html.
  string interpolation: `{{data}}`
  property binding: `[property] = "data"`
  event binding: `(event) = "expression"`
  two-way-binding: `[(ngModel)]= "data"`
  # String Interpolation
  - {{data}} no functions or code only things that can be turned into string. Tertury expressions ok.
  # Property Binding
  - [property] = 'data' allows you to connect the typescript code to the DOM including functions
  string interpolation does not work inside property binding
  # Event Binding
  - (event) = "inline code, or method"
  best to not put too much logic inline, beter to point to a method
  # Passing and using Data with Event binding
  - `$event` allows you to target the event that is occuring
  # Two-Way-Databinding
  - `[(ngModel)]= 'data'` easier way to pass and use data with event binding.
  # Combinig all forms of Data binding
  - Combined all four forms of data binding to input and output data.
  # Assignment: Data & Event Binding
  - Assignment completed
  # Understanding Directives
  - instruction in the DOM, components are those kind of instructions.
  # Using ngif to Output Data Conditionally
  - allows you to inline conditional statements of when to show DOM element.
  # Styling Elements with ngStyle
  - `[ngStyle] = ""` allows you to change elements style dynamically based on a method or logic.
  # Applying CSS Classes Dynamically
  - `[ngClass] = ['className': Condition]`
    allows you to add classes to elements if certain conditions are met.
  # Outputting Lists with ngFor
  - `*ngFor = "let item of items"` loops through items in TS file and adds them to the DOM
  # Assignment: Directives
  - Assignment Completed
  # Getting the Index when using ngFor
  - `*ngFor="let item of items; let i = index"` allows you to acces the index through the i variable.