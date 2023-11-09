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
    - 
  # Showing a Loading Indicator
    - 
  # Using a Service for Http Requests
    - 
  # Services & Components Working Together
    - 
  # Sending a DELETE Request
    - 
  # Handling Errors
    - 
  # Using Subjects for Error Handling
    - 
  # Using the catchError Operator
    - 
  # Error handling & UX
    - 
  # Setting Headers
    - 
  # Adding Query Params
    - 
  # Observing Different Types of Responses
    - 
  # Changing the Response Body type
    - 
  # Introducing Interceptors
    - 
  # Manipulating Request Objects
    - 
  # Response Interceptors
    - 
  # Multiple Interceptors
    - 
  # Wrap Up
  