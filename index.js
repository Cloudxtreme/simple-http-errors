var errors = {
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  UNPROCESSABLE_ENTITY: 422,
  
  
  _build: function (message, code) {
    var error = new Error(message);
    error.message = message;
    error.status = code;
    
    return error;
  },
  
  
  unauthorized: function (message) {
    return errors._build(message || 'Unauthorized', errors.UNAUTHORIZED);
  },
  
  
  notFound: function (message) {
    return errors._build(message || 'Not Found', errors.NOT_FOUND);
  },
  
  
  unprocessableEntity: function (message) {
    return errors._build(message || 'Unprocessable Entity', errors.UNPROCESSABLE_ENTITY);
  }
}


module.exports = errors;