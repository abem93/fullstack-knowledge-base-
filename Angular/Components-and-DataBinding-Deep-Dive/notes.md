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
  - `@ViewChild('localReferenceName', {static: true}) variableName: ElementRef` ElementRef needs to be imported from angular/core.
  to use use, `this.variableName.nativeElement.value`. DO NOT USE TO CHANGE ELEMENT THROUGH VIEW CHILD
  # Projecting Content into Components with ng-content
  - adding `<ng-content></ng-content>` in the child html where you want the content to be in the parent html.
  # Understanding the Component Lifecycle
  - 
    - `ngOnChanges` called at the start and whenever one of our bound input(@Input) properties changes.
    - `ngOnInit` gets executed once the component is initialized. doesnt always have to be visible/added to the DOM in order to be executed.
    - `ngDoCheck` called every time a change detection runs. 
    - `Change detection`, is an angular system that checks whether something has changed inside of a component itself to change the template. Like a property value or adding elements to DOM.
    - `ngAfterContentInit` called after content via (ng-content) has been initialized
    - `ngAfterContentChecked` called everytime change detection checked this content we are projecting in our component.
    - `ngAfterViewInit` is called once the view of our own component has finished initializing/once view has been rendered.
    - `ngAfterViewChecked` called whenever view has been checked and all changes have been made and no changes were detected by Angular
    - `ngOnDestroy` called right before object is destroyed by angular.
  # Seeing lifecycle hooks in Action
  - Applied All the lifecycle hooks into our server components code. Created a button to destroy first component
  # Lifecycle hooks and Template Access
  - Here we looked at the place in time where lifecycles and elements run and when we can access them.
  # Getting Access to ng-content with @ContentChild
  - `@ContentChild('localHTMLReference', {static:true}) variable: ElementRef;`
  to access content from outside component.
  `this.variable.nativeElement.textContent`
  # Wrap Up
  # Assignment Components & Databinding