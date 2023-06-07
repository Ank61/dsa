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


// function maxSubstring(array) {
//     if (array.length === 1) {
//         return array[0];
//     }
//     let maxSum = 0;
//     let tempMax = 0;
//     for (let i = 0; i < array.length; i++) {
//         tempMax = tempMax + array[i];
//         if (maxSum < tempMax) {
//             maxSum = tempMax;
//         }
//         if (tempMax < 0) {
//             tempMax = 0
//         }
//     }
//     return maxSum
// }
// console.log(maxSubstring([-2, -3, 4, -1, -2, 1, 5, -3]))





// function countPaths(m, n) {
//     // Create a 2D matrix to store the count of paths
//     const dp = Array(m).fill(Array(n).fill(0));
//   console.log("This is intial Array",dp)
//     // Initialize the first row and column with 1 since there is only one path to reach each cell in the first row and column
//     for (let i = 0; i < m; i++) {
//       dp[i][0] = 1;
//     }
//     console.log("This is first loop" , dp)

//     for (let j = 0; j < n; j++) {
//       dp[0][j] = 1;
//     }
//     console.log("This is second loop" , dp)
//     // Calculate the count of paths for each cell
//     for (let i = 1; i < m; i++) {
//       for (let j = 1; j < n; j++) {
//         dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
//       }
//     }
//   console.log("this is the converted array",dp)
//     // Return the count of paths for the bottom-right cell
//     return dp[m - 1][n - 1];
//   }

//   // Example usage
//   const m = 3; // Number of rows
//   const n = 3; // Number of columns

//   const paths = countPaths(m, n);
//   console.log(`Number of paths: ${paths}`);

// function gridPattern(m,n){
// if(m===1 && n===1){
// return 1
// }

// let countDown =0;
// let countRight = 0;

// if(m>1){
// countRight = gridPattern(m-1,n)
// }
// if(n>1){
// countDown =gridPattern(m,n-1)
// }
// return countDown +countRight
// }
// console.log(gridPattern(3,3))






// function sorting(array){
//     //since there are only 0 1 2
//     // we dont need any sorting algorithms
//     //simplly get the count of 1 0 and 2 and make a new arrray
//     let countZeros = 0;
//     let countOnes = 0;
//     let countTwo = 0;
//     let finalArray =[];
//     for(let i=0; i<array.length; i++){
//         if(array[i]===0){
//             countZeros++;
//         }
//         if(array[i]===1){
//             countOnes++;
//         }
//         if(array[i]===2){
//             countTwo++;
//         }
//     }
//     for(let j=0;j<countZeros;j++){
//         finalArray.push(0)
//     }
//     for(let j=0;j<countOnes;j++){
//         finalArray.push(1)
//     }
//     for(let j=0;j<countTwo;j++){
//         finalArray.push(2)
//     }
// return finalArray;
// }
// console.log(sorting([2,0,2,1,1,0]))

// function sort(nums){
//     let countZeros = 0;
//     let countOnes = 0;
//     let countTwo = 0;
//     for(let i=0; i<nums.length; i++){
//         if(nums[i]===0){
//             countZeros++;
//         }
//         if(nums[i]===1){
//             countOnes++;
//         }
//         if(nums[i]===2){
//             countTwo++;
//         }
//     }
//     console.log(countZeros,countOnes,countTwo)
//         for(let j=0;j<countZeros;j++){
//         nums[j]=0
//     }
//     console.log("after one loop",nums , "Next loop",countZeros,countOnes+countZeros )
//     for(let k=countZeros;k<countOnes+countZeros;k++){
//         nums[k]=1
//     }
//     console.log("After two loop", nums)
//     console.log("after two loop",nums , "Next loop",countZeros,countOnes+countTwo )
//     for(let v=countOnes+countZeros;v<countOnes+countZeros+countTwo;v++){
//         nums[v]=2
//     }
//     return nums
// }
// console.log(sort([2,0,2,1,1,0]))

//OPTIMIZE

// function sort(array){
//     //three pointers
// let low=0;
// let middle =0;
// let high =array.length-1

// while(middle<=high){

//     if(array[middle]==0){
//         //swap() =>Low and liddles
//         swap(array,low,middle)
//         //increment both low and middle pointers
//         low++
//         middle++
//     }
//     if(array[middle]===2){
//         swap(array,middle,high)
//         high--;
//     }
//     if(array[middle]==1){
//         middle++;
//     }
//  }
//  return array
// }

// function swap(array,low,middle){
// let temp = array[low];
// array[low] = array[middle];
// array[middle] = temp;
// }
// console.log(sort([2,0,2,1,1,0]))


//PASCAL TRAINGLGE 

// function generateRow(row) {
//     let ans = 1;
//     let ansRow = [1];
//     for (let col = 1; col < row; col++) {
//       ans = ans * (row - col);
//       ans = ans / col;
//       ansRow.push(ans);
//     }
//     return ansRow;
// }

// function pascalTriangle(n) {
//     let ans = [];
//     for (let row = 1; row <= n; row++) {
//         ans.push(generateRow(row));
//     }
//     return ans;
// }

// let n = 5;
// console.log(pascalTriangle(n));

// function nCr(n, r) {
//     let res = 1;

//     // calculating nCr:
//     for (let i = 0; i < r; i++) {
//         res = res * (n - i);
//         res = res / (i + 1);
//     }
//     return res;
//     }

//     function pascalTriangle(r, c) {
//     const element = nCr(r - 1, c - 1);
//     return element;
// }

// const r = 5; // row number
// const c = 3; // col number
// const element = pascalTriangle(r, c);
// console.log(`The element at position (${r},${c}) is: ${element}`);


// function Leader(array){
//     let newArray=[];
// for(let i=0; i<array.length; i++){
//     let j=i+1
//    while(true){
//         if(array[i]<array[j]){
//             break;
//         }
//         else if(array[i]>array[j]){
//             j++;
//         }
//         else if(j===array.length){
//             break;
//         }
//     }
//     if(j===array.length){
//         newArray.push(array[i]);
//     }
// }
// return newArray
// }
// console.log(Leader([10, 22, 12, 3, 0, 6]))

// function Leader(array){
//     let newArray = [];
// let lastIndex =array.length-2;
// console.log(array[lastIndex], array[lastIndex+1])
//     while(lastIndex >=-1){
//         console.log("ARRAY",newArray,"index",lastIndex)
//         if(array[lastIndex]>array[lastIndex+1]){
//             newArray.push(array[lastIndex+1]);
//         }
//         lastIndex = lastIndex-1;
//     }
// return newArray;
// }
// console.log(Leader([4,7,1,0]))


// function GreaterThanLength(array) {
//     const numberOfTimes = array.length;
//     let check = 1;
//     let resultArray = [];
//     let condition = Math.floor(numberOfTimes / 2)
//     array.sort((a, b) => {
//         return a - b
//     });
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === array[i + 1] && array[i] !== undefined) {
//             check++;
//         }
//         console.log(check)
//         console.log(condition)
//         if (check > condition) {
//             resultArray.push(array[i])
//             check = 1
//         }
//     }
//     return resultArray
// }
// console.log(GreaterThanLength([1, 2, 2, 3, 2]))



// function mergeOverlappingIntervals(arr) {
//     const n = arr.length;
    
//     // sort the given intervals
//     arr.sort((a, b) => a[0] - b[0]);
    
//     const ans = [arr[0]];
    
//     for (let i = 1; i < n; i++) {
//       const last = ans[ans.length - 1];
//       const curr = arr[i];
      
//       // if the current interval overlaps with the last interval
//       console.log("First",ans)
//       if (curr[0] <= last[1]) {
//         console.log("Hit", last[i])
//         last[1] = Math.max(last[1], curr[1]);
//         console.log("Hot", arr)
//       }
//       // if the current interval does not overlap with the last interval
//       else {
//         //Simply pushing into array not doing any operation
//         ans.push(curr);
//       }
//       console.log("Second",ans)
//     }
    
//     return ans;
//   }
  
//   const arr = [[1, 3], [8, 10], [2, 6], [15, 18]];
//   const ans = mergeOverlappingIntervals(arr);
//   console.log("The merged intervals are:");
//   for (let it of ans) {
//     console.log(`[${it[0]}, ${it[1]}]`);
//   }


//Brute force
// function mergeTwoArray(array1, array1Length, array2, array2Length) {
//     if(array1Length===0){
//         array1 =[...array2]
//     }else{
//     array1.sort((a, b) => { return a - b })
//     array2.sort((a, b) => { return a - b })
//     for(let k=0; k<array1Length; k++ ){
//         if(array1[k]===0){
//             array1.splice(k,1)
//         }
//     }
//     for (let i = 0; i < array1Length; i++) {
//         if(array1[i]===0){
//             array1.splice(i,1)
//         }
//         for (let j = 0; j < array2Length; j++) {
//             if(array2[j]===0){
//                 array2.splice(j,1)
//             }
//             if (array1[i] > array2[j]) {
//                 array1.splice(i, 0, array2[j])
//                 array2.splice(j, 1)
//             }
//         }
//     }
//     if (array2) {
//        array1.push(...array2)
//     }
// }
//     return array1;
// }
// console.log(mergeTwoArray([0], 0, [1], 1))


//OPTIMAL SOLUTIONS FOR MERGE
// var merge = function(nums1, m, nums2, n) {
//     for (let i = m, j = 0; j < n; i++, j++) {
//         nums1[i] = nums2[j];
//     }
//     console.log(nums1,nums2)
//     nums1.sort((a, b) => a - b);
//     return nums1
// };
// console.log(merge([1,2,3,0,0,0], 3,[2,5,6], 3))



// function LongestSubsequnce(nums) {
//     nums.sort((a, b) => a - b);
//     let count = 0;
//     let temp = 1;
//     if (nums.length === 0) {
//         return 0;
//     }
//     if (nums.length === 1) {
//         return 1;
//     }
//     console.log(nums)
//     for (let i = 0; i < nums.length - 1; i++) {
//         if (nums[i] === nums[i + 1] - 1) {
//             console.log(nums[i])
//             temp++;
//             count = Math.max(count, temp);
//         } else if (nums[i] === nums[i + 1]) {
//             console.log("Gave the",nums[i])
//             count = Math.max(count, temp);
//         } else {
//             temp = 1;
//             count = Math.max(count, temp);
//         }
//     }
//     return count;
// }
// console.log(LongestSubsequnce([1,2,0,1]))














