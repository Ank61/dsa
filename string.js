// let string = `.gyYetLFLBG{border-radius : 8px;background-color : #cce4ff ; border :  3px Solid #d6c9f1 ; padding-top : 0px ; padding-left : 0px; padding-right : 0px ;padding-bottom : 0px;}
// .gyYetLFLBG:hover{background-color :#d6c9f1 }
// .dDaxXaABkF{border-radius : 0px;background-color : #cce4ff ; border :  0px Solid #d6c9f1 ; padding-top : 0px ; padding-left : 0px; padding-right : 0px ;padding-bottom : 0px;}
// .dDaxXaABkF:hover{background-color :#d6c9f1 }.NnwwmKXKMK{border-radius : 0px;background-color : #cce4ff ; border :  0px Solid #d6c9f1 ; padding-top : 0px ; padding-left : 0px; padding-right : 0px ;padding-bottom : 0px;}
// .NnwwmKXKMK:hover{background-color :#d6c9f1 }.vbxERgkzDO{border-radius : 0px;background-color : #7fd9d1 ; border :  0px Solid #d6c9f1 ; padding-top : 8px ; padding-left : 31px; padding-right : 30px ;padding-bottom : 9px;}
// .vbxERgkzDO:hover{background-color :#7fd9d1 }.HhVZYXdEzj{border-radius : 6px;background-color : #7fd9d1 ; border :  0px Solid #d6c9f1 ; padding-top : 8px ; padding-left : 24px; padding-right : 23px ;padding-bottom : 6px;}
// .HhVZYXdEzj:hover{background-color :#7fd9d1 }.pYvqQLJuIa{border-radius : 20px;background-color : #7fd9d1 ; border :  0px Solid #d6c9f1 ; padding-top : 7px ; padding-left : 15px; padding-right : 16px ;padding-bottom : 5px;}
// .pYvqQLJuIa:hover{background-color :#7fd9d1 }.rinnYrPMvt{border-radius : 7px;background-color : #cce4ff ; border :  1px Solid #7138e3 ; padding-top : 8px ; padding-left : 25px; padding-right : 31px ;padding-bottom : 7px;}
// .rinnYrPMvt:hover{background-color :#d6c9f1 }.DgZqmXRCAK{border-radius : 13px;background-color : #cce4ff ; border :  1px Solid #020006 ; padding-top : 9px ; padding-left : 19px; padding-right : 15px ;padding-bottom : 8px;}
// .DgZqmXRCAK:hover{background-color :#d6c9f1 }* {box-sizing: border-box}`
// var checkArray = ["pYvqQLJuIa","rinnYrPMvt"]
// var finalArray = [];
// var firstIndex;
// var nextIndex;
// var i = 0
// var substring
// var addArray;
// var letters;
// function createArray(string) {
//     for (let i = 0; i <checkArray.length; i++) {
//         //we need content of i class
//         function helper(string) {
//             if(firstIndex===-1) return 
//             firstIndex = string.indexOf(`.${checkArray[i]}`)
//             if(firstIndex!==-1){
//             nextIndex = string.indexOf('}', firstIndex)
//             substring = string.slice(firstIndex, nextIndex + 1)
//             finalArray.push(substring)
//             substring = 0;
//             return helper(string.slice(nextIndex,string.length))
//             }
//             else {return}
//         }
//         helper(string)
//         firstIndex=0;
//         nextIndex=0;
//         substring=0
//     }
//     return finalArray
// }
// console.log(createArray(string))


// const data = new Map();
// data.set('frist Key' , 'firstValue');
// data.set('second Key' , 'secondValue');
// data.set(true , 'firstValue');

// // for(const dating of data){
// //   console.log(dating[1])  //key value pair
// // }

// console.log(data.has(true))




// function stringLol(str1) {
//     //use Stack 
//     let str = str1.split('');
//     console.log(str)
//     let arr1 = [];
//     let count =0;
//     for (let i = 0; i < str1.length; i++) {
//         arr1.push(str1[i])
//     }
//     console.log(arr1)
//     for(let j=0; j<str1.length;j++){
//         if(arr1[j]===str[j]){
//             count++;
//         }
//     }
//     if(count===str1.length){
//      return true
//     }
//         return false;
// }
// console.log(stringLol("race a car"))


// function stringLol(string1){
// //using stack
// let string12 ='';
// let arr1 = [];
// for(let i=0;i<string1.length;i++){
// arr1.push(string1[i]);
// }
// console.log(arr1)
// console.log("Intiail value",string1)
// for(let i=0;i<string1.length;i++){
// string12 =string12+ arr1.pop();
// }
// console.log(string12)
// if(string1.toLowerCase().replace(/[^a-zA-Z0-9]/g, '')===string12.toLowerCase().replace(/[^a-zA-Z0-9]/g, '')){
// return true
// }
// return false
// }
// console.log(stringLol('A man, a plan, a canal: Panama'))

// function CommonPrefix(array) {
//     let stringCheck = array[0];
//     let resultIndex = 0;

//     for (let i = 0; i < array.length; i++) {
//         let newString = array[i]
//         for (let j = 0; j < newString.length; j++) {
//             if (newString[j]!==stringCheck[j]) {
//                 resultIndex=j
//                 console.log("break",j)
//                 break;
//             }
//         }
//     }
// return stringCheck.slice(0,resultIndex);
// }
// console.log(CommonPrefix(["fliower", "fliow", "flight"]))

// function CommonPrefix(array) {
//     let stringCheck = array[0];
//     let resultIndex = 0;
//     let obj = {};
//     for (let i = 0; i < array.length; i++) {
//         //check the equal to the first index 
//         //I need index of the lst common in all 

//     }
// return stringCheck.slice(0,resultIndex);
// }
// console.log(CommonPrefix(["fliower", "fliow", "flight"]))


//STRIVER LIST FOR THE STRING

// Q-1
// class Stack {
//     constructor(){
//         this.result = [];
//     }
//     push(value){
//         return this.result.push(value);
//     }
//     pop(){
//         return this.result.pop();
//     }
//     size(){
//         return this.result.length
//     }
//     peek(){
//         return this.result;
//     }
//     isEmpty(){
//         return this.result.length===0;
//     }
//     toString(){
//         return this.result.join("");
//     }
// }
//  function removeParenthesis(string) {
//      let resultArray = [];
//      let stack =new Stack();
//      let character;
//      for(let i=0; i<string.length; i++){
//         character = string[i];
//         if(stack.isEmpty()){
//             //to push initial at the empty length only if the charcacter is (
//             if (character==='('){
//                 stack.push('(');
//             }
//         }
//         else{
//             //if the character si  ")" then pop from the stack
//             if(character===")" && stack.size()===1){
//                 //Do not push as this condition will work only one time
//                 stack.pop() //gives the "(" as popede value
//             }
//             else{
//                  //if the charcter is "(" then simply push both in the result and stack
//                 resultArray.push(character)
//             if(character==="("){
//                 console.log("Hit push",character , i)
//                 stack.push(character)
//             }
//             else{
//                 console.log("Hit pop",character , i)
//                 stack.pop()
//             }
//         }
//         }
//      }
// return resultArray.join("")
//  }
//  console.log(removeParenthesis("(()())(())"))



//Q-2
// function reverse(string){
//     let trimmedString = string.trim();
// let originalArray = trimmedString.split(" ")
// let newArray = [];
// for(let i=originalArray.length-1; i>=0; i--){
//  newArray.push(originalArray[i])
// }
// return newArray.filter(item=>item!=="").join(' ')
// } 
// console.log(reverse("a good   example"))



//Q-3
// function findOdd(string){
//     let num = parseInt(string)
//     let arrayNum = string.split("");
//     if(num%2!==0){
//     return string
//     }
//     else{
//         let answer="";
//         let largestDecrease = "";
//         let subString=""
//         let k =0;
//         for(let j=string.length-1; j>0; j--){
//             subString = string.slice(k,j)
//             if(parseInt(subString)%2!==0){
//                 console.log("Hit in the largest",subString)
//                 // console.log("Hit in the largest",subString)
//                 largestDecrease = subString
//                 return largestDecrease
//             }
//         }
//         if(largestDecrease!==""){
//             return largestDecrease;
//         }
//         else{
//         for(let i=0; i<arrayNum.length ; i++){
//             if(parseInt(arrayNum[i])%2!==0){
//                 answer= (arrayNum[i])
//             }
//         }
//         if(answer!==""){
//             return answer
//         }
//         else{
//             return answer
//         }
//     }
// }
// }
// console.log(findOdd("239537672423884969653287101"))



//Q-5

// function isomorphicWords(string1,string2){
//    if(string1.length !== string2.length){
//     return false
//    }
//    let map = new Map();
//    for(let i=0; i<string1.length; i++){
//     map.set(string1[i],string2[i])
//    }
//    let newString = ""
//    for(let j=0; j<string1.length; j++){
//     newString = newString + map.get(string1[j])
//    }
//    if(newString===string2){
//     return true
//    }
//    else{
//     return false
//    }
// }
// console.log(isomorphicWords('badc','baba'))

//Alternative quesrion 
// const map = new Map();
// const set = new Set();
// let n = s.length - 1;

// while (n >= 0) {
//     if (map.has(s[n]) && map.get(s[n]) !== t[n]) {
//     return false;
//     }
//     if (!map.has(s[n]) && set.has(t[n])) {
//     return false;
//     }
//     set.add(t[n]);
//     map.set(s[n], t[n]);
//     n--;
// }

// return true;




//Q 6


// function stringRotate(s, goal) {
//     let max = 100;
//     while(s !== goal && max > - 1) {
//      if(s === goal) {
//         return true;
//      }
//      const firstChar = s[0];
//      console.log(s)
//      s = s.substring(1) + firstChar;
//      console.log(s)
//      max--;
//     }
//     return s === goal;
// }
// console.log(stringRotate("abcde", "cdeab"))



//Q-7
// function Anagram(string, goal) {
//     let obj = {};
//     let count = 1;
//     if(string.length!==goal.length){
//         return false
//     }
//     for (let i = 0; i < string.length; i++) {
//         if (string[i] in obj) {
//             count = obj[string[i]] + 1
//             obj[string[i]] = count
//         }
//         else {
//             count = 1
//             obj[string[i]] = count
//         }
//     }
//     console.log(string,goal)
//     console.log(obj)
//     for (let j = 0; j < goal.length; j++) {
//         if (goal[j] in obj) {
//             obj[goal[j]] = obj[goal[j]] - 1
//         }
//         else if (obj[goal[j]] < 0) {
//             return false
//         }
//         else {
//             return false
//         }
//     }
//     for (let key in obj) {
//         if (obj.hasOwnProperty(key)) {
//           if (obj[key] < 0) {
//            return false
//           }
//         }
//       }
//     return true
// }
// console.log(Anagram("aacc", "ccac"))
//ALTERNATE FOR q-7
// var isAnagram = function(s, t) {
//     s = s.split("").sort()
//     t = t.split("").sort()

//     if (s.length !== t.length)
//         return false;

//     for (var i = 0; i < s.length; i++)
//         if (s[i] !== t[i])
//             return false;

//     return true;
// };

//Q8
// function arrangeInDecreasing(string) {
//     console.log(string)
//     var newString = "";
//     let count = 1;
//     let obj = {};
//     for (let i = 0; i <string.length; i++) {
//         if (string[i] in obj) {
//             count = obj[string[i]]+1
//             obj[string[i]] = count
//         }
//         else {
//             count = 1;
//             obj[string[i]] = count;
//         }
//     }
//     const sortedObj = Object.fromEntries(
//         Object.entries(obj).sort((a, b) => b[1] - a[1])
//         );
//     console.log("This",sortedObj)
//     const ob = Object.entries(sortedObj)
//     console.log(ob)
//     let initalValue=0;
//     let secondValue= 1;
//     for(let k=0; k<ob.length; k++){
//         while(ob[k][secondValue]>0){
//             newString = newString + ob[k][initalValue];
//             ob[k][secondValue] = ob[k][secondValue]-1;
//         }
//     }
//     console.log(ob)
//     return newString
// }
// console.log(arrangeInDecreasing("2a554442f544asfasssffffasss"))

//Method new 
// var frequencySort = function(s) {
//     let map = new Map();
// let str = '';
// let keys, values;
// for(let i=0; i<s.length; i++){
//     if(!map.has(s[i])){
//         map.set(s[i], 1);
//     } else {
//         map.set(s[i], map.get(s[i]) + 1);
//     }
// }
// let map1 = new Map([...map.entries()].sort((a,b) => b[1]-a[1]))
// for(let [i,j] of map1.entries()){
//     str += i.repeat(j)
// }
// return str;
// };

// console.log(frequencySort("2a554442f544asfasssffffasss"))



//Q9
// function parenthesis(string, s) {
//     let itemIndex = 0;
//     let closingTagCounter = 0;
//     let openingTagCounter = 0;
//     let array = string.split("")
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === s) {
//             itemIndex = i
//         }
//     }

//     for (let j = itemIndex; j < array.length; j++) {
//         if (array[j] === ')') {
//             closingTagCounter++
//         }
//         if (array[j] === '(') {
//             openingTagCounter++
//         }
//     }
// //   while(openingTagCounter>0){
// //     closingTagCounter--
// //     openingTagCounter--
// //   }
// console.log(closingTagCounter)
// if(openingTagCounter>0){
//     closingTagCounter = closingTagCounter-openingTagCounter
// }
//     console.log(closingTagCounter, openingTagCounter)
//     return closingTagCounter
// }

// console.log(parenthesis("(1+(2*3)+((8)/4))+1", "3"))




//Alternate
// function maxNesting(s){
//     let stack = [];
//     let max = 0;
//     for(let i = 0; i < s.length; i++){
//         if(s[i] === '('){
//             stack.push(s[i]);
//         }
//         if(s[i] === ')'){
//             stack.pop();
//         }
//         if(stack.length > max){
//             console.log("Hit", stack.length ,max)
//             max = stack.length;
//         }
//     }
//     return max;
// }
// console.log(maxNesting("(1)+((2))+(((3)))"))