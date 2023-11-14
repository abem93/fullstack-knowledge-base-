# Making HTTP Requests
  - # A New IDE
  # Module Introduction
    - How angular connects to a backends and how to send http requests.
  # How does Angular Interact With Backends?
    - YOU DONT CONNECT ANGULAR TO DATABASE DIRECTLY!!! EVERYONE CAN SEE YOUR CODE.Everyone can see your angular code. You send HTTP requests and get back Resposnses.
  # The Anatomy of a Http Request
    - * URL- api endpoint(/post/1)
      * HTTP Verb - POST, GET, PUT 
      * Headers(Metadata) - optional.
      * Body - ({title: "New Post"})
  # Backend (Firebase) Setup
    - Firebase account setup- Realtime DB
  # Sending a POST Request
    - import HttpClients from @angular/common/http, must subcribe to request.
    `this.http.post(
      'URL',
      postData
    ).subscribe(responseData => {
      console.log(responseData)
    })`
  # GETting Data
    - use the GET verb and subscribe to request.
    ```
    this.http.get(
      'https://ng-complete-guide-c8cb1-default-rtdb.firebaseio.com/posts.json'
    ).subscribe(posts => {
      console.log(posts)
    });
    ```
  
  # Using RxJS Operator to Trasnform Response Data
    - we used the .pipe and .map observable operators to turn our JSON object into an array of posts with the ID included.
  # Using Types with the HttpClient
    - We created a Post model, type so we could more easily and more cleanly set our data type. But it can be done without the model. `<{property: type}>` right after the verb
  # Outputting Posts
    - we set the post to our array variable. we then in our template organize how we want the data to be shown and do some ngif to check if there is data. and ngFor to add the posts.
  # Showing a Loading Indicator
    - added a variable of is fetching and set it to false; in the fetch function at the top we set this variable to true. then in the subscribe we set it back to false. In our template we display it when isFetching is true.
  # Using a Service for Http Requests
    - Created a service .ts file to store our Post http requests. We just created the methods and copied the coded, making sure to make the right imports.
  # Services & Components Working Together
    - When moving the fetch, our posts were no longer loading, so we removed the subscribe method in the service and returned the http method. then in our app component we resubscribed to it and set our posts = to the return data.
  # Sending a DELETE Request
    - The delte request was faily simple since we were clearing all the post. `return this.http.delete('url/posts.json')` and we set our posts array to an empty array. Then it was all clear.
  # Handling Errors
    - We added a error option to our to our http request inside the subscribe method observable.
  # Using Subjects for Error Handling
    - We create a subject in the service to emit the error message and subscribe to it in our component sending out the http request. We must also use ngOnDestroy to unsubscribe to it as well.
  # Using the catchError Operator
    - Using the catch error we can send error messages to a someplace like an analytics server and then pass it on to our component. But we return a throwError of which both are imported from rxjs.
  # Error handling & UX
    - Created a button that resets the error variable back to null to handle the error message.
  # Setting Headers
    - in our get verb after the link we add a comma, and an object. We then in side the object add headers: new HttpHeader({key:value}) import httpHeaders first. 
  # Adding Query Params
    - very similar to headers we do params: new HttpParams().set('key', 'value')
  # Observing Different Types of Responses
    - We  can shape the response a littl more by using the observe after the url with what we want such as the response {observe: 'response'} also we can pipe(tap(event => {event})) to see what types of responses we got back and to respond accordingly in our ui.
  # Changing the Response Body type
    - The response type of http requests is normally json but can be changed to text or any other available format. although if it was stated before what type of data you wanted in the top. and then changed lower in the code the response might break your code.
  # Introducing Interceptors
    - Interceptors are just like the name saids, they intercept requests and handle. We consoled logged request is on the way with every request being made.
  # Manipulating Request Objects
    - 
  # Response Interceptors
    - 
  # Multiple Interceptors
    - 
  # Wrap Up
  