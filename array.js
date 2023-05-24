//1 function longest(arr, n) {
//     //n i the lenght of the array
//     let prev =arr[0];
//     for (let i = 1; i <= n; i++) {
//         if(prev<arr[i]){
//             prev = arr[i];
//         }
//     }
//     return prev;
// }
// console.log(longest([1], 7))

//  function secondLargest(array,n){
//     let first = array[0];
//     let second= -1;
//     if(n===2){
//         for(let i=1;i<n;i++){

//         }
//     }
//     for(let i=0;i<n;i++){
//         if(first<array[i]){
//             second = first;
//             first = array[i];
//         }
//         if(second < first && first > array[i] && second < array[i]){
//                 second = array[i];
//             }
//     }
//     return second
// }
// console.log(secondLargest([12,1],6))

// function arraySortedOrNot(array, n) {
//     let initial = array[0];
//     for (let i = 1;i<n;i++) {
//         //false =0
//         //true =1
//         //decreasing order then false else true
//         if(initial>array[i]){
//             return 0;
//         }
//         initial = array[i];
//     }
//     return 1
// }
// console.log(arraySortedOrNot([2,2,2,2,2],5))

//  function mutliOperation(arr,n){
//     //remove dublicate values from the sorted values
//     //make the array in sorted array in increasing order and return the array
//     var j=0;
//     for(let i=0;i<n;i++){
//         if(arr[i]!=arr[j]){
//           //if not equal to then increase the pointer 
//             j++;
//           //make the pointer index value to the previous value of the array 
//           arr[j]=arr[i];
//         }
//     }
//     return j+1;
// }
// console.log(mutliOperation([2,2,2,2,2,2,3,3,4,4],10))



// function moveZero(nums) {
//   //two pointer approach
//   let j = 0
//   let i = 1
//   while (i < nums.length) {
//       if (nums[j] === 0 && nums[i] !== 0) {
//           nums[j] = nums[i]
//           nums[i] = 0
//           j++
//       }
//       if (nums[j] !== 0) {
//           j++
//       }
//       i++
//   }
//   return nums
// }
// console.log(moveZero([4,2,4,0,0,3,0,5,1,0]))
