var Stack = function(){
	this.stack = [];
}

Stack.prototype.push = function(object) {
	this.stack.push(object);
};

Stack.prototype.pop = function(){
	var popped = this.stack.pop();

	if(!popped){
		throw new Error("Array is empty");
	}else{
		return popped;
	}
}

module.exports = Stack;