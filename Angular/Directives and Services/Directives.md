# Directives Deep Dive 
  # Module Introduction
  - In this module we will review directives, learn to create our own, learn the difference between attribute and structural directives.
    - structual directives affect the whole DOM, can delete and add elements
    - attribute directives only affect the elements they are added to and their properties but never destroy element.
  # ngFor and ngif Recap
    - recapped ngFor to loop through arrays/list and display them on DOM. Used ngif to toggle between the odds and evens list.
  # ngClass and ngStyle Recap
    - recapped ngClass by creating an 'odd' class in the css that turns the text color to red. in the html component this class is only added to the attribute if number is not evenly divisible by 2. ngStyle we added a background color only if the number was not evenly divisible by 2. 
  # Creating a Basic Attribute Directive
    - create a folder with a typescript file.
    `name.directive.ts` instead of component we say directive in this file. we have to import "Directive" from angular/core and export class the directived. as  well as name the selector. Afterwards we have to import it into the app module file.
  # Using the Renderer to build a Better Attribute Directive
    - `ng generate directive "folder"/'directiveName` then import OnInit, ElementRef, and Renderer2. Implement the OnInit in the export class. add ngOninit. In the constructor method add `private elementRef: ElementRef, private renderer: Renderer2` we used this in ngOnInit by using the `.setStyle(this.elementRef.nativeElement,'background-colo', 'orange')` 
  # Using HostBinding to Bind to Host Properties
    - imported and used @HostListener from angular/core used the mouseenter and leave property to change background from blue to transparent.
  # Binding to Directive Properties
    - we used @hostbinding to bind the directives and manipulate the styles of the dom.
  # What happens behind the Scenes on Structural Directives
    - ngIf uses the star, but behind the scenes it is using property binding and ng-template to the condition. The *ngIf simplifies that.
  # Building a Structural Directive
    - `ng g d <name>` creates a new directive. We used input() set <directiveName>(condition:boolean). To create or view element we  used the .createEmbedded view. We also imported view container Ref and templateRef
  # Understanding ngSwitch
    - `*ngSwitch="condition"` allows you to display elements in the DOM per condition when there are many conditions. Like a normal Case switch in JS.