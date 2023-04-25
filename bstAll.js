class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree{
    constructor(){
        this.root = null;
    }
    insertLoop(value){
        let newNode = new Node(value);
        if(!this.root){
            this.root = newNode;
        }
        else{
            let current = this.root;
            while(true){//means I have to return something
                if(current.value<newNode.value){
                    //right section
                    if(current.right===null){
                        current.right = newNode;
                        return this;
                    }
                    else{
                        //there is something present here
                        current = current.right;
                    }
                }
                else if(current.value>newNode.value){
                    if(current.left===null){
                        current.left = newNode;
                        return this;
                    }
                    else{
                        current = current.left;
                    }
                }
                else{
                    return this
                }
            }
        }
    }
    DFSPreorder(){
        //need a helper function to solve the recursion
        //need an array to store a variable
        var data = [];
        function helper(node){
            data.push(node.value)
            if(node.left) helper(node.left) 
            if(node.right) helper(node.right)
        }
        helper(this.root)
        return data
    }
    DFSInorder(){//ascending order that means left one is the smallest
        var data = [];
        function helper(node){
            if(node.left) helper(node.left)
            data.push(node.value)
            if(node.right) helper(node.right);
        }
        helper(this.root)
        return data
    }
    DFSPostorder(){//LRC
        var data = [];
        function helper(node){
            if(node.left) helper(node.left);
            if(node.right) helper(node.right);
            data.push(node.value)
        }
        helper(this.root)
        return data
    }
}
let binaryST = new BinarySearchTree();
binaryST.insertLoop(25);
binaryST.insertLoop(50);
binaryST.insertLoop(15);
binaryST.insertLoop(10)
console.log(binaryST.DFSPostorder())