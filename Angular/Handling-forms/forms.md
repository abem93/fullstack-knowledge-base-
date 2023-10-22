# Handling Forms in Angular Apps 

  # Module Introduction
  - 
    - Forms need to be handled through angular and then through the Angular HTTP service if they need to reach out to a server.
  # Why do we need Angular's Help?
    - we need the values of the information in the form as an object with {key:'value'} pairs and metadata of whether the form is valid.
  # Template-Driven(TD) vs Reactive Approach
    - A template drive approach you setup the template in html and angular infers the structure. The reactive approach you manually define the structure of the form in TS. Also setup the HtML code and manually connect it.
  # An Example Form
    - no action attribute or method, in the HTML code. Form should not be submitted to server.
  # TD: Creating the Form and Registering the Controls
    - we allow angular to view what controls we want registered by adding ngModel into the tag of the input and we also add name="someName" to name our control.
  # TD: Submitting and Using the Form
    - we add our method in the html on the form element and bind it to `(ngSubmit)="ourMethod(f)"`. we add `#f="ngForm"` to acccess the the actual form. in our method we import ngForm and the f in our method is type ngForm to expose the form.
  # TD: Understanding Form State
    - We looked at the object and what the states mean, such as dirty if the form has anything changed. 
  # TD: Accessing the Form with @ViewChild
    - we can access via ViewChild by typing f in @ViewChild('f') variableName: NgForm
  # TD: Adding Validation to check User Input
    - We can required in the html and it will make the form invalid if the user does not enter an input. it tracts validator on a form level and a control level while also adding classes.
  # Built-in Validators & Using HTML5 Validation
  # TD: Using the Form State
    - we used .ng-invalid and .ng-touched to change the css to red border if the user did not enter value or the value entered was invalid.
  # TD: Outputting Validation Error Messages
    - we added an error message by binding `#email="ngModel"` in our input element then in our span error message tag we used `*ngIf="!email.valid && email.touched"` to display a message if email was invalid and only after a user had clicked in on it at least once.
  # TD: Set Default Values with ngModel Property Binding
    - ngModel one way binding to set a default property value. In our TS file we set the default value and set the ngModel to that value.
  # TD: Using ngModel with Two-Way-Binding
    - to take in input and output it right back incase it needs to be displayed.
  # TD: Grouping Form Controls
    - we can wrap the parent div of input values with ngModelGroup and give it a name. With that name given we can group inputs/controls of the form together.
  # TD: Handling Radio Buttons
    - 
  # TD: Setting and Patching Form Values
    - 
  # TD: Using Form Data
    - 
  # TD: Resetting Forms
    - 
  # Assignment: Template-driven Forms
    - 
  # Introduction to Reactive Approach
    - 
  # Reactive: Setup
    - 
  # Reactive: Creating a Form in Code