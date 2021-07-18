class Node
{
    constructor(element)
    {
        this.element=element;
        this.next=null;
    }
}
class linkedlist
{
    constructor()
    {
        this.head=null;
        this.size=0;
    }
    insertFront(element)
    {
        let node= new Node(element);
       
        if(this.head==null)
            this.head=node;
        else{
           node.next=this.head;
           this.head=node; 
        }
        this.size++;
    }
    insertBack(element)
    {
        let node= new Node(element);
        let current;
        if(this.head==null)
            this.head=node;
        else{
            current=this.head;
            while(current.next)
            {
                current=current.next;
            }
            current.next=node;
        }
        this.size++;
    }
    deleteFront()
    {
        if(this.head==null)
            return "Empty";
        else{
            let ele;
            let current=this.head;
            ele=current.element;
            this.head=current.next;
            current.next=null;
            this.size--;
            return ele;
        }
        //this.size--;
    }
    deleteBack()
    {
        if(this.head==null)
            return "Empty";
        else
        {
            let ele;
            let current=this.head;
            let prev;
            while(current.next!=null)
            {
                prev=current;
                current=current.next;
            }
            ele=current.element;
            prev.next=null;
            this.size--;
            return ele;
        }
    }
    printList()
    {
        let curr=this.head;
        let str="";
        while(curr)
        {
            str+=curr.element + " ";
            curr=curr.next;
        }
        return str;
    }

}
let l1=new linkedlist()
l1.insertFront(10);
l1.insertFront(20);
console.log(l1.printList())
l1.insertBack(30);
l1.insertBack(40);
console.log(l1.printList())
console.log(l1.deleteFront())
console.log(l1.deleteFront())
console.log(l1.printList())
console.log(l1.deleteBack())
console.log(l1.printList())