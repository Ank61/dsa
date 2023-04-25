class MaxBinaryHeap{
    constructor(){
        this.value = [];
    }
    insert(element){
        //first psuh in the array;
        this.value.push(element);
        //bubbling up
        let Index = this.value.length-1;
        let lastItem = this.value[Index];
        while(Index>0){ //stop it when the top index is reached that is root level
            //finding the parent
            let parentIndex = Math.floor((Index-1)/2);
            let parentElement = this.value[parentIndex];
            if(lastItem<=parentElement)break; //if the parent is smaller than the lastItem then do nothing but loop outnof it
            //swap
            this.value[parentIndex] = lastItem;
            this.value[Index] = parentElement;
            Index = parentIndex;//again made the index where it is parent
        }
        return this.value;
    }
    extractMax(){
        //Swapped
        let lastIndex = this.value.length-1;
        let lastItem = this.value[lastIndex];
        let root = this.value[0]
        this.value[0] =lastItem;
        this.value[lastIndex] = root;
        //removedd the largest
        const end =this.value.pop()
        this.sinkDown()
        return end;
    }
    sinkDown(){
        let rootIndex = 0;
        const length = this.value.length;
        const element = this.value[0];
        while(true){
            let leftChild = 2*rootIndex+1; //make sure that that it is not out of bonds
            let rightChild = 2*rootIndex+2;
            let left ,right ,swap=null;

            if(leftChild<length){ //through this 
                left = this.value[leftChild]//value of the left Child of the first
                if(left>element)  {//if it is greater than the element than swap at the end
                    swap =leftChild; //just acting as a indicator that we need to swap
                }             
            }
            if(rightChild<length){//through this out of bound
                right = this.value[rightChild] //value of the right child of the first
                if((swap===null&&right>element) || (swap!==null&& right>left)){//condition 1 : if the left has not swapped that means that left child was less than element
                    //condition 2 : swapped has occured but the right is still greater than left and element
                    swap = rightChild;
                }
            }
            if(swap===null) break; //if there is no swap that means there is no need to be in the loop, postion is correct hence loop out of it
            //swap
            this.value[rootIndex] = this.value[swap] //making the intial value of the equal to the the value where there is swapped index
            this.value[swap] = element; //making the swapped value the intial value 
        }
    }
}
let max = new MaxBinaryHeap();
max.insert(41);
max.insert(39);
max.insert(33);
max.insert(18);
max.insert(27);
max.insert(12);
max.extractMax()
max.extractMax()
max.extractMax()
max.extractMax()
max.extractMax()
max.extractMax()
console.log(max.extractMax())