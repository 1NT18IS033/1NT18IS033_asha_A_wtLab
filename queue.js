class Queue{
    constructor()
    {
        this.item = [];
    }
    insert(element)
    {
        this.item.push(element);
    }
    delete()
    {
        if (this.item.length == 0)
    		return "Underflow";
        return this.item.shift();
    }
    peek()
    {
        return this.item[this.item.length - 1];
    }
    size()
    {
        return this.item.length;
    }
    isEmpty()
    {
        return this.item.length == 0;
    }
    printQueue()
    {
    	var str = "";
    	for (var i = 0; i < this.item.length; i++)
    		str += this.item[i] + " ";
    	return str;
    }
}
var queue = new Queue();
console.log(queue.printQueue());
console.log(queue.delete());
console.log(queue.isEmpty())

queue.insert(10);
queue.insert(20);
queue.insert(30);
console.log("After adding elements to queue : ");
console.log(queue.printQueue());
console.log("Size of the queue :");
console.log(queue.size());
console.log("Last element of the queue : ");
console.log(queue.peek());
console.log("deleted element from the queue:")
console.log(queue.delete());
console.log("After deleting  the queue will be :")
console.log(queue.printQueue());
console.log(queue.isEmpty())