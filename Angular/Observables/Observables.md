# Observables
  # Module Introduction
  - 
    - Observables are data packages use to handle asynchronous tasks.
  # Analyzing Angular Observables
    - Observable is a stream of data that gives us new values. Dont need to create Angular observables just need to subscribe to them.
  # Getting Closer to the Core of Observables
    - observables keep emitting values, some do only emit once and are done. So we must unsubscribe from them to not have a memory leak. Observables provided by angular autounsubscribe.
  # Building Custom Observable
    - Created a custom counter observable by importing Observable from rxjs then creating a `const variable = Observable.create(...)`
  # Errors & Completion
    - Error cancels observable/ does not complete it.
  # Observables & You!
    - Observables wrap and event source and push out data or error codes.
  # Understanding Operators
    - pipe operator allows us to transform, mold, build up and funnel our data to transform and filter it out. 
  # Subjects
    - Subjects are more efficient than event emitter to create observable.
    Also need to unsubscribe. but can only be used as cross component event emitters. Can not be used if using @Output