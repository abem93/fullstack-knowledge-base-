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
    - we added radio buttons by creating a variable with an array of our options. We then in a div used `*ngFor="let var of vars"` inside that div we had an input with ngModel and `[value]="var"` and inside the input in text we binded {{ var }} 
  # TD: Setting and Patching Form Values
    - you can use .setValue of the form to input all the default values you want Not useful if you have a button to write these values and user already has some type of input. .patchValue to override parts of a form.
  # TD: Using Form Data
    - we used the form data to display it only if it was submited by 2way binding it 
  # TD: Resetting Forms
    - form.reset() will reset the inputs and state of your form.
  # Assignment: Template-driven Forms
    - Applied all the knowledge we learn in the past lessons
  # Introduction to Reactive Approach
  # Reactive: Setup
    - We must import the ReactiveFormsModule to our app.module and the FormsGroup to our component TS file.
  # Reactive: Creating a Form in Code
    - created the form in the TS file. by taking our form variable of type FormGroup and adding and importing new FormControl(null/'default value')
  # Reactive: Syncing HTML and Form
    - we syngchronize the html and and form by adding [formGroup]='ourFormName' from our TS file.
  # Submitting the Form
    - to submit the form we add `(ngSubmit)='onSubmit()` to our html form element. and we then in our app component TS file we log this.formGroup that we created in the TS file.
  # Reactive: Adding Validation
    - We added validation by importing validators from @angular/forms in our TS file. then in our Formgroup where we declared the controls, we added a second parameter... Validators.required, or [validators.requiered, validators.email] to add multiple validators.
  # Reactive: Getting Access to Controls
    - We can can access the controls to display error message by use the .get('controlName').valid/.touched we can omit the .get if we are trying to control the whole form
  # Reactive: Grouping Controls
    - We group control by going into our TS file and where we declared our controls we declare the group, instead of it being a `new FormControl` it is a <new FormGroup> object this time. and we insert our grouped controls there. In our Html we wrap those controls in a div so they are in the same div together. and where we had already declared them we add <groupName.controlName>. We add . groupName to the already declared control Name. 
  # Reactive: Arrays of Form Controls(FormArray)
    - To create a form array we first created a div that would hold our formArray. Inside the div we had a button with with a (click)='onclickMethod()' and then another div with `*ngFor="let control of getControls(); let i = index"`  for our input. inside the input we added[formControlName]="i". In our TS file where our controls were declared we added a new control <new FormArray[]> instead of control. We pushed data into it from from the on <clickMethod()> by wrapping everything in the (<FormArray>this.form.get('array')).push(control) and defining the control as normal form Control and passing it as a parameter. We then used the getControls() to return and loop through the array
  # Reactive: Creationg Custom Validators
    - We created a custom Validator in the TS file, we gave it a parameter of `customValidator(control: FormControl):{[s:string]:boolean}{}` it then returns true or null
  # Reactive: Using Error Codes
    - We used the error codes to manage the type of error message we displayed. If the field was left blank we target the `.get('form'.control).errors['required']` to display a message if empty. and our custom validator if the username entered was invalid.
  # Reactive: Creating a Custom Async Validator
    - 
  # Reactive: Reacting to Status or Value Change
    - 
  # Reactive: Setting and Patching Values
    - 
  # Assignment: Reactive Form