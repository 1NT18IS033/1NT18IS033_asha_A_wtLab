class Stack {
	constructor()
	{
		this.items = [];
	}
    push(element)
    {
    	this.items.push(element);
    }
    pop()
    {
    	if (this.items.length == 0)
    		return "Underflow";
    	return this.items.pop();
    }
    front()
    {
    	return this.items[this.items.length - 1];
    }
    size()
    {
        return this.items.length;
    }
    isEmpty()
    {
        return this.items.length == 0;
    }
    printStack()
    {
    	var str = "";
    	for (var i = 0; i < this.items.length; i++)
    		str += this.items[i] + " ";
    	return str;
    }
}
var stack = new Stack();
console.log(stack.printStack());
console.log(stack.pop());
console.log(stack.isEmpty())
stack.push(10);
stack.push(20);
stack.push(30);
console.log("After adding elements to stack : ");
console.log(stack.printStack());
console.log("Size of the stack :");
console.log(stack.size())
console.log("Front element of the stack : ");
console.log(stack.front());
console.log("poped element from the stack:")
console.log(stack.pop());
console.log("After poping the stack will be :")
console.log(stack.printStack());
console.log(stack.isEmpty())