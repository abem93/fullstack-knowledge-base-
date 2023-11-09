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
    - 
  # Using RxJS Operator to Trasnform Response Data
    - 
  # Using Types with the HttpClient
    - 
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
  