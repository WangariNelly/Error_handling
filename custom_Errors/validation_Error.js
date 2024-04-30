
const ValidationError = require('./validation.js');

// Validation Function
function validateEmail(email) {
    if (!email || typeof email !== 'string') {
      throw new ValidationError('Email must be a non-empty string', 'email');
    }
  
    // Simulate email format validation
    if (!email.includes('@')) {
      throw new ValidationError('Invalid email format', 'email');
    }
  }

  //Use case function
  function createUser(email) {
    try {
      validateEmail(email);
      console.log('User created successfully with email:', email);
    } catch (error) {
      if (error instanceof ValidationError) {
        console.error('Validation Error:', error.message);
        console.error('Field:', error.field);
      } else {
        console.error('Generic Error:', error.message);
      }
    }
  }

  createUser('nellywangari30');