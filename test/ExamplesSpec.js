var assert = require("assert")

describe('A series of example tests', function(){
	describe('A failing test', function(){
		it('1 + 1 should equal 2', function(){
			var calc = 1+2
			assert.equal(calc, 2);
		})
	})
})