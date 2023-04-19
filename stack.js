class Node{
constructor(value){
this.value = value;
this.next =null;
}
}
class Stack{
    constructor(){
        this.first = null;
        this.last = null;
        this.size=0;
    }
    push(value){
        //make a new Node and make it first always (LIFO)
        let newNode = new Node(value);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        }
        else{
            //First save the intial first so that you can use it to make next connection
            let oldFirst = this.first;
            this.first = newNode;
            this.first.next = oldFirst;
        }
        this.size++;
            return this;
    }
    pop(){
        //First remove the first and make the next the new frist
        let removedFirst = this.first;
        this.first =this.first.next;
        this.size--;
        return removedFirst.value;
    }
}
let stack = new Stack();
stack.push("1");
stack.push("2");
stack.push("3");
stack.push("4");
console.log(stack);
console.log(stack.pop())
console.log(stack);