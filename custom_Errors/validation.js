//define a custom validation error class extending Error object
class ValidationError extends Error{
    constructor(message,field){ 
        super(message);
        this.name = this.contructor.name;
        this.field = field;
        Error.captureStackTrace(this, this.constructor);  //used to stack trace of an error object.
    }
}


// Export the ValidationError class
module.exports = ValidationError;