var should = require('should'),
    errors = require('../');


describe('Errors', function () {
  
  describe('401', function () {
    it('should have a default message', function (pass) {
      var error = errors.unauthorized();
      
      error.should.be.an.Error;
      error.toString().should.equal('Error: Unauthorized');
      error.status.should.equal(401);
      
      pass();
    });
    
    it('should accept a message', function (pass) {
      var error = errors.unauthorized('Authentication required');
      
      error.should.be.an.Error;
      error.toString().should.equal('Error: Authentication required');
      error.status.should.equal(401);
      
      pass();
    });
  });
  
  
  describe('404', function () {
    it('should have a default message', function (pass) {
      var error = errors.notFound();
      
      error.should.be.an.Error;
      error.toString().should.equal('Error: Not Found');
      error.status.should.equal(404);
      
      pass();
    });
    
    it('should accept a message', function (pass) {
      var error = errors.notFound('Resource not found');
      
      error.should.be.an.Error;
      error.toString().should.equal('Error: Resource not found');
      error.status.should.equal(404);
      
      pass();
    });
  });
  
  
  describe('422', function () {
    it('should have a default message', function (pass) {
      var error = errors.unprocessableEntity();
      
      error.should.be.an.Error;
      error.toString().should.equal('Error: Unprocessable Entity');
      error.status.should.equal(422);
      
      pass();
    });
    
    it('should accept a message', function (pass) {
      var error = errors.unprocessableEntity('Could not save');
      
      error.should.be.an.Error;
      error.toString().should.equal('Error: Could not save');
      error.status.should.equal(422);
      
      pass();
    });
  });
  
});