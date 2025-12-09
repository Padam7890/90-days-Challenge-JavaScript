//Merge Two array,

const array1 = [1,2,3,4,5,2,3];
const array2 = [2,3,1,3,1,3,4,1]
const array3 = [];


//simple solution using loop
// for (let index = 0; index < array1.length; index++) {
//     array3[index] = array1[index]
// }
// for (let index = 0; index < array2.length; index++) {
//      array3[array3.length + index] = array2[index]
// }

//Array 

const mergeArray = [...array1, ...array2]





console.log(mergeArray)