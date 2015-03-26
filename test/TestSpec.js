var assert = require("assert")
var Stack  =require('../src/Stack');

describe('Stack should', function(){
	it('pop most recently pushed object', function(){
		var stack = new Stack();
		var stringToPush = "Hello World";

		stack.push(stringToPush);

		assert.equal(stack.pop(), stringToPush);			
	});

	it('throw an exception if popped when empty', function(){
		var stack = new Stack();
		
		assert.throws(stack.pop, Error, "Array is empty");			
	})
})