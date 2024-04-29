## object errors

Errors occur inthe try block and generate an object containing the details about the error which is then passed as arguments inthe catch block.
inbuilt errors have 3 main properties;
(as demostrated inthe code block)
 >> object.name 
 >> object.message
 >> object.stack 


## ReferenceError Handling: 
catch the ReferenceError using a try...catch block.

## Error Object Properties:
Inside the catch block, accessing properties of the error object:
error.name: This will output the type of error, which is "ReferenceError" in this case.
error.message: This will provide a description of the error, which is "nelly is not defined".
error.stack: This will give you the stack trace of the error, which includes the error type, message, and stack trace information.

## Error Object Scope: 
Remember that the error object is only available within the catch block. Attempting to access it outside of this block, as you're doing in console.log(error);, will result in a ReferenceError because error is not defined in that scope.