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
   insert(value) {
      let newNode = new Node(value);
      if (this.root == null) {
         this.root = newNode;
      }
      else {
         this.insertNode(this.root, newNode) //Recursion
      }
   }

   insertNode(node, newNode) {
      if (node.value > newNode.value) {
         if (node.right === null) {
            node.right = newNode;
            return this;
         }
         else {
            this.insertNode(node.right, newNode)
         }
      }
      else if (node.value < newNode.value) {
         if (node.left === null) {
            node.left = newNode;
            return this;
         }
         else {
            this.insertNode(node.left, newNode)
         }
      }
   }
   // insert(value) {
   //    let newNode = new Node(value);
   //    if (!this.root) {
   //       this.root = newNode;
   //       return this;
   //    }
   //    else {
   //       let current = this.root;
   //       while (true) {
   //          if (value < current.value) {
   //             if (current.left === null) {
   //                current.left = newNode;
   //                return this;
   //             }
   //             else {
   //                current = current.left; //simply increamenting the the root value to next left of it
   //             }
   //          }
   //          else if (value > current.value) {
   //             if (current.right === null) {
   //                current.right = newNode;
   //                return this;
   //             }
   //             else {
   //                current = current.right;
   //             }
   //          }
   //       }
   //    }
   // }
   find(value){
      let current = this.root;
      if(current==null) return false;//if there is not root
      while(current){//while current is not null
         if(value<current.value){
            current = current.left;
         }
         else if(value>current.value){
            current = current.right;
         }
         else{
            return true
         }
      }//found null
      return false;
   }
}

let bst = new BinarySearchTree();
bst.insert(10)
bst.insert(5)
bst.insert(13)
bst.insert(11)
bst.insert(2)
bst.insert(16)
bst.insert(7)
console.log(bst)













































// class Node {
//     constructor(value) {
//         this.value = value;
//         this.left = null;
//         this.right = null;
//     }
// }
// class BinarySearchTree {
//     constructor() {
//         this.root = null;
//     }
//     // insert(value){
//     //     let newNode = new Node(value);
//     //     if(this.root===null){
//     //         this.root = newNode;
//     //         return this;
//     //     }
//     //     else{
//     //         var current = this.root;
//     //         while(true){
//     //             if(value < current.value){
//     //                 //that means it needs to go to the
//     //                 if(current.left===null){
//     //                     current.left = newNode;
//     //                     return this; //otherwise while oop will not stop
//     //                 }
//     //                 else{
//     //                     current = current.left;
//     //                 }
//     //             }
//     //             else{
//     //                 if(current.right ===null){
//     //                     current.right = newNode;
//     //                     return this;
//     //                 }
//     //                 else{
//     //                     current = current.right;
//     //                 }
//     //             }
//     //         }
//     //     }
//     // }
//     insert(value){
//         var newNode = new Node(value);
//         if(this.root === null){
//            this.root = newNode;
//         }else{
//            this.insertNode(this.root, newNode);
//         };
//      };
//      insertNode(node, newNode){
//         if(newNode.value < node.value){//left
//            if(node.left === null){
//               node.left = newNode;//insert new
//            }else{
//               this.insertNode(node.left, newNode); //recursion
//            };
//         } else {
//            if(node.right === null){
//               node.right = newNode;
//            }else{
//               this.insertNode(node.right,newNode);//recursion
//            };
//         };
//      };
// }
// let bst = new BinarySearchTree();
// bst.insert(11)
// bst.insert(12)
// bst.insert(3)
// bst.insert(4)
// console.log(bst)