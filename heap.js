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
        while(Index>0){
            let parentIndex = Math.floor((Index-1)/2);
            let parentElement = this.value[parentIndex];
            if(lastItem<=parentElement)break;
            //swap
            this.value[parentIndex] = lastItem;
            this.value[Index] = parentElement;
            Index = parentIndex;//again made the index where it is parent
        }
        return this.value 
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
            let leftChild = 2*rootIndex+1;
            let rightChild = 2*rootIndex+2;
            let left ,right ,swap=null;

            if(leftChild<length){
                left = this.value[leftChild]
                if(left>element)  {
                    swap =leftChild; 
                }             
            }
            if(rightChild<length){
                right = this.value[rightChild]
                if((swap===null&&right>element) || (swap!==null&& right>left)){
                    swap = rightChild;
                }
            }
            if(swap===null) break;
            //swap
            this.value[rootIndex] = this.value[swap] 
            this.value[swap] = element;
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