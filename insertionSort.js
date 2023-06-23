function insertion(array){
console.log(array)
for(let i=1; i<array.length; i++){
//give intial value to be 1;
    const current = array[i]
//make the outer loop to be one less than 
j = i-1
while(j>=0 && array[j]>current){
    //Swapping 1: pervious with the next
    array[j+1] = array[j]
j--;
}
//now interchange the value with one more
//Swapping 2: next with the previous
array[j+1] = current
}
return array
}
console.log(insertion([4,6,7,8,3,2,1]))                                                            