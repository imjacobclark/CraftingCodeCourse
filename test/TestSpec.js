var assert 	= 	require("assert"),
	Stack  	=	require('../src/Stack');

describe('Stack should', function(){
	before(function() {
		this.stack = new Stack();
	});

	it('pop the most recently pushed object', function(){
		// Given we have an object to push to the stack
		var objectToPush = new Object;

		// When we push the object to the stack
		this.stack.push(objectToPush);

		// Then pop should return the object pushed onto the stack
		var pop = this.stack.pop();
		assert.equal(typeof pop, 'object');	

		// And once the stack is empty, it should throw an exception
		assert.throws(pop, Error, "Array is empty");	
	});

	it('pop objects in the reverse order to which they were pushed', function(){
		// Given we have several objects to push to the stack
		var firstObject 	= 	new Object,
			secondObject	=	new Object,
			thirdObject		=	new Object;

		// When we push the objects to the stack
		this.stack.push(firstObject);
		this.stack.push(secondObject);
		this.stack.push(thirdObject);

		// Then pop should return an object type as many times as an object has been pushed
		var pop = this.stack.pop();

		assert.equal(typeof pop, 'object');
		assert.equal(typeof pop, 'object');
		assert.equal(typeof pop, 'object');

		// And once the stack is empty, it should throw an exception
		assert.throws(pop, Error, "Array is empty");					
	});

	it('throw an exception if popped when empty', function(){
		// Given we have a new, empty stack
		this.stack = new Stack();

		// When we do nothing to the stack

		// Then pop should thrown an 'Array is empty' exception, because the Stack is empty
		assert.throws(this.stack.pop, Error, "Array is empty");			
	})
})