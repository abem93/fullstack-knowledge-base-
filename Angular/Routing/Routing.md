# Changing Pages with Routing
  # Module Introduction
  - Angular ships with own router that allows you to change url, but still is only a one page application.
  # Why do we need a Router?
    - In this module we have, several different pages to navigate our page.
  # Setting up and Loading Routes
    -  We can set up the routes in the app module. Importing the routes module. create the `Routes = [{path: 'home', component: HomeComponent}]`.
    instead of adding app-component to the html we add <router-outlet>
  # Navigating with Router Links
    - remove href and use `routerLink="/home"`
  # Understanding Navigation Paths
    - absolute paths by adding a / you will always go to the root domain. without a slash it will try to a /path to the current component.
  # Styling Active Router Links
    - routerLinkActive adds a css class to our code to allow it be styled. `[routerLinkActiveOptions]="{exact:true}"` can be added to empty paths to fix if they are showing active at all times 
  # Navigating Programmatically
    - we can trigger the navigation in our code by importing Router from angular/router. Adding it to the constructor and then in our code using `this.router.navigate(["/home"])`
  # Using Relative Paths in Programmatic Navigation
    - navigate does not know on what route we are currently on unlike the routerLink. So a we need to pass and second parameter to the navigate method which is an object that is relativeTo: this.route. We do this by setting route in the constructor and importing ActivatedRoute.
    the code should look something like this <this.router.navigate(['servers'], {relativeTo: this.route})>
  # Passing Parameters to Routes
    - we can pass parameters in our route by adding a /and then a colon and then the parameter for example `users/:id`
  # Fetting Route Parameters
    - import ActivatedRoute from angular/router inject the activated route in the component constructor we will be using it.

    If route is already in component and we need to update params we need to subscribe to params.
  # An important note about Route Observables
    - if subscribed to an observable angular will destroy it everytime you leave the component. Unless it is a custom observable. Then you must import OnDestroy and <unsubscribe()>

  # Passing Query Parameters and Fragments
    - we add the query parameter by adding `[queryParams]="{key:vale}"`
    and fragments by adding the `fragment="loading"`
  # Retrieving Query Parameters and Fragments
    - 
  # Practicing and some Common Gotchas
    - 
  # Setting up Child (Nested) Routes
    - 
  # Using Query Parameters - Practice
    - 
  # Configuring the Handling of Query Parameters
    - 
  # Redirecting and Wildcard Routes
    - 
  # Redirecting Path Matching
    - 
  # Outsourcing the Route Configuration
    - 
  # An Introduction to Guards
    - 
  # Protecting Routes with canActivate
    - 
  # Protecting Child(Nested) Routes with canActivateChild
    - 
  # Using a Fake Auth Service
    - 
  # Controlling Navigation with canDeactivate
    - 
  # Passing Static Data to a Route
    - 
  # Resolving Dynamic DAta with the resolve Guard
    - 
  # Understanding Location Strategies
    - 