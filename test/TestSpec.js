var assert = require("assert")
var Stack  =require('../src/Stack');

describe('Stack should', function(){
	before(function() {
		this.stack = new Stack();
	});

	it('pop most recently pushed object', function(){
		// Given we have an object to push to the stack
		var stringToPush = "Hello World";

		// When we push the object to the stack
		this.stack.push(stringToPush);

		// Pop should return the object pushed onto the stack
		assert.equal(this.stack.pop(), stringToPush);			
	});

	it('throw an exception if popped when empty', function(){
		// Given we have a new, empty stack
		this.stack = new Stack();

		// When we do nothing to the stack

		// Pop should thrown an 'Array is empty' exception, because the Stack is empty
		assert.throws(this.stack.pop, Error, "Array is empty");			
	})
})