### Extending errors.

create custom errors by extending the built-in Error object.
1. Define a CustomError class that extends the built-in Error object. This class captures a stack trace and sets the error name and message.
2. Define an extended custom error class DatabaseError that extends CustomError. This class adds an additional property query to store the database query that caused the error.
3. Then use the simulateDatabaseError function to throw a DatabaseError instance with a custom message and the query that caused the error.
4. In the catch block, handle the error based on its type. If it's an instance of DatabaseError, we log the specific error message and the query. Otherwise, we log a generic error message.


### Validating Error Code

1. Define a class ValidationError which extends the inbuild Error object; this acts as the blueprint for all validation errors.
inthe constructor two prameters 'message';the error message & 'field';the field that failed.Call super(message) to initialize the error message using the parent class constructor. Set the name property of the error to the name of the constructor function,set the field property to the provided field parameter.
 
2. Create a function to use to validate 
3. Create a usecase.