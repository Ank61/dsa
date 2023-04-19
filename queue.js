class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(value) {
        let newNode = new Node(value);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        }
        else {
            let oldFirst = this.first;
            this.first = newNode;
            newNode.next = oldFirst;
        }
        return this.size++;
    }
    pop() {
        let oldLast = this.last;
        let current = this.first;
        let previousToLast;
        while (current.next) {
            previousToLast = current;
            current = current.next;
        }
        this.last = previousToLast;
        previousToLast.next = null;
        this.size--;
        return oldLast.value;
    }
}

let queue = new Queue();
queue.push(1);
queue.push(2);
queue.push(3);
queue.push(4);
console.log(queue);
console.log(queue.pop());
console.log(queue.pop());
console.log(queue.pop());
console.log(queue.last.value);