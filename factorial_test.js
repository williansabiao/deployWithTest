var assert = require('chai').assert
var factorial = require('./factorial.js');
 
describe('Factorial', function(){
  it('Should return 120 when the value is 5', function(){
    result = factorial.execute(5);
 
    assert.equal(120, result);
  });
 
  it('Should return 6 when the value is 3', function(){
    result = factorial.execute(3);
 
    assert.equal(6, result);
  });
});