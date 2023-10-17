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
    - 
  # Passing Parameters to Routes
    - 