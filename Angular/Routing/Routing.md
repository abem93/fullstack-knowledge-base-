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
    - to access the query Params and fragments. inject the  ActivatedRoute, then `this.route.snapshot.queryParams` to log the Params or `console.log(this.route.snapshot.fragment)` to log the fragment. To access and subscribe `this.route.queryParams.subscribe();` and `this.route.fragment.subscribe();`
  # Practicing and some Common Gotchas
    - When we get params from snapshot we need to make sure we have the right type of data, if we need a number we need to convert or a string
  # Setting up Child (Nested) Routes
    - We do this by going back to route path. and add `, children:[path: 'child route', component: 'Component']`
  # Using Query Parameters - Practice
    - We used to the query paramems to extract a value and use it for ngIf to show the edit component.
  # Configuring the Handling of Query Parameters
    - on our Router.navigate inside the relatie to. We add queryParamsHandling property and set it to `'preserve'`
  # Redirecting and Wildcard Routes
    - in the routes we add a new one at the bottom `{ path: '**', redirectTo: '/not-found-page'}`
  # Redirecting Path Matching
    - a common error is if the path is blank, we can fix this by adding `pathMatch: 'full'` to our path route
  # Outsourcing the Route Configuration
    - We add the Routing to a new file copy all our routes and import all components. in NgModule we add imports:[RouterModule.forRoot('ourRoutes')]
    and export:[RouterModule] because it has already been configured.
  # An Introduction to Guards
    - Guards are used to make sure only certain parts of the application are visible to logged in users/authenticated users
  # Protecting Routes with canActivate
    - We use the canActivate to mkae sure it is authenticated or else it is rejected.
  # Protecting Child(Nested) Routes with canActivateChild
    - the CanActivateChild guard allows you to protect your whole route and  all your child routes or just the child routes.
  # Using a Fake Auth Service
    - We create fake login and log out methods and buttons to activate our CanActivate guards.
  # Controlling Navigation with canDeactivate
    - Can deactivate allows us to stop the user from leaving a page to make sure changes are saved and if they are routed to the right screen.
  # Passing Static Data to a Route
    - Data can be passed through the routing module. We can add `data:{message: 'Your message'},` or any other data in the object.
  # Resolving Dynamic Data with the resolve Guard
    - 
  # Understanding Location Strategies
    - 