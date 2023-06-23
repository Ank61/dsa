function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}
// function bubbleSort(array) {
//     for (let i = 0; i < array.length; i++) {
//         console.log("Index of i", i, "Value", array[i])
//         for (let j = 0; j <= i; j++) {
//             console.log("Index of j", j, "Value", array[j])
//             if (array[j] > array[i]) {
//                 swap(array, i, j)
//             }
//         }
//         console.log("------------------------------", array)
//     }
//     return array
// }
// console.log(bubbleSort([9, 3, 6, 2, 5, 7, 8, 4]))

//Steps to perform
// 1. Nested loop => the innerloop must rotate till <= the outerloop;
// 2. if you found the outerloop lesser than the oinnerloop the swap  



function bubbleSorting(array){
    for(let i=0; i<array.length; i++){
        //incremeanting the 
        for(let j=0; j<=i; j++){
            if(array[i]<array[j]){
                swap(array,i,j)
            }
        }
    }
    return array
}
console.log(bubbleSorting([9, 3, 6, 2, 5, 7, 8, 4]))