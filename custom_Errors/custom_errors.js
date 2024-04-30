// Custom error class
class CustomError extends Error {
    constructor(message) {
      super(message);
      this.name = this.constructor.name;
      this.message = message;
      Error.captureStackTrace(this, this.constructor);
    }
  }
  
  // Extended custom error class
  class DatabaseError extends CustomError {
    constructor(message, query) {
      super(message);
      this.query = query;
    }
  }
  
  // Usage example
  function simulateDatabaseError() {
    const query = 'SELECT * FROM non_existing_table';
    throw new DatabaseError('Table not found', query);
  }
  
  try {
    simulateDatabaseError();
  } catch (error) {
    if (error instanceof DatabaseError) {
      console.error('Database Error:', error.message);
      console.error('Query:', error.query);
    } else {
      console.error('Generic Error:', error.message);
    }
  }
  