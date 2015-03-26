var assert 	= 	require("assert"),
	Stack  	=	require('../src/Stack');

describe('Stack should', function(){
    before(function() {
        this.stack = new Stack();

        this.firstObject    = "first object";
        this.secondObject   = "second object";
    });

    it('pop the most recently pushed object', function(){
        this.stack.push(this.firstObject);

        assert.equal(this.stack.pop(), this.firstObject);	

        assert.throws(this.stack.pop, Error, "Array is empty");	
    });

    it('pop objects in the reverse order to which they were pushed', function(){
        this.stack.push(this.firstObject);
        this.stack.push(this.secondObject);

        assert.equal(this.stack.pop(), this.secondObject);
        assert.equal(this.stack.pop(), this.firstObject);
        
        assert.throws(this.stack.pop, Error, "Array is empty");					
    });

    it('throw an exception if popped when empty', function(){
        this.stack = new Stack();
        
        assert.throws(this.stack.pop, Error, "Array is empty");			
    })
})