function swap(arr, i, min) {
    const temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
}
function selectionSort(array) {
    const length = array.length;
    let min;
    for (let i = 0; i < length; i++) {
        min = i;
        for (let j = i + 1; j < length; j++) {
            if (array[j] < array[i]) {
                min = j;
            }
        }
        if (min !== i) {
            swap(array, i, min)
        }
    }
    return array
}
console.log(selectionSort([2, 3, 5, 4, 6, 1]))


//Steps to perform the selection sort
//1. Nested Loop : give min intially to outerloop (eachtime)
//2. Outerloop will looop through the rest of the element of the array for each increment int the outer loop
//3. if you find the innerloop lessthan the initla min in the outerloop then make min =j
//In the outerloop check if the min that was given intially, if it is there if not then swap. 