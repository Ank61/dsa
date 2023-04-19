class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    // insert(value){
    //     let newNode = new Node(value);
    //     if(this.root===null){
    //         this.root = newNode;
    //         return this;
    //     }
    //     else{
    //         var current = this.root;
    //         while(true){
    //             if(value < current.value){
    //                 //that means it needs to go to the
    //                 if(current.left===null){
    //                     current.left = newNode;
    //                     return this; //otherwise while oop will not stop
    //                 }
    //                 else{
    //                     current = current.left;
    //                 }
    //             }
    //             else{
    //                 if(current.right ===null){
    //                     current.right = newNode;
    //                     return this;
    //                 }
    //                 else{
    //                     current = current.right;
    //                 }
    //             }
    //         }
    //     }
    // }
    insert(value){
        var newNode = new Node(value);
        if(this.root === null){
           this.root = newNode;
        }else{
           this.insertNode(this.root, newNode);
        };
     };
     insertNode(node, newNode){
        if(newNode.value < node.value){//left
           if(node.left === null){
              node.left = newNode;//insert new
           }else{
              this.insertNode(node.left, newNode); //recursion
           };
        } else {
           if(node.right === null){
              node.right = newNode;
           }else{
              this.insertNode(node.right,newNode);//recursion
           };
        };
     };
}
let bst = new BinarySearchTree();
bst.insert(11)
bst.insert(12)
bst.insert(3)
bst.insert(4)
console.log(bst)