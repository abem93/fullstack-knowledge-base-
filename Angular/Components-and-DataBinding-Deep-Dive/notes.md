# Components & Databinding Deep Dive

  # Module Introduction
  # Splitting Apps into Components
  - Split the App Component into two components, the server element component and the cockpit component. Html and typescript data was transferred. Although app is not communicating between parent and child at this time.
  # Property & Event Binding Overview
   - property and event binding can be used on html elements, properties and events as well as directives... properties and events as well as components. Even create custom properties and events.
  # Binding to Custom Properties
  -   use `@Input()` and add to import core to allow elements to be seen from outside.
  # Assigning an Alias to Custom Properties
    - to assign an alias inside the `@input('alias')` parentheses you add the alias in quotation marks.
  # Binding to Custom Events
    - `@output()`  and `.emit('data to be passed')`. Created `serverCreated = new EventEmitter<>`
  # Assigning an Alias to Custom Events
    - just like @input `@output('alias)` can be added just make sure to update alias where ever it will be used.
  # Custom Property and Event Binding Summary
    - `@Input` allows parents to send and update   data to child component.
    `@Output` allows child to `,emit` data to a parent component.
  # Understanding View Encapsulation
  - Angular adds unique attributes to all elements in the same component. 
  # More on View Encapsulation
  - adding `encapsulation: ViewEncapsulation` first import view encapuslation from the angular core. `.None` makes the CSS global by removing the unique attributes. `.Native` implements the ShadowDOM but is only available in browsers that suport it. `.Native` is the default style.
  # Using Local References in Templates
  - In the component HTML file, we can use a `#referenceName` to reference a particular HTML element and extract its value from it using the .value
  # Getting Access to the Template & DOM with @ViewChild
  - `@ViewChild(localReferenceName) variableName: ElementRef` ElementRef needs to be imported from angular/core.
  # Projecting Content into Components with ng-content
  # Understanding the Component Lifecycle
  # Seeing lifecycle hooks in Action
  # Lifecycle hooks and Template Access
  # Getting Access to ng-content with @ContentChild
  # Wrap Up
  # Assignment Components & Databinding