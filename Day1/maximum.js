// Input: [3, 7, 2, 9, 4]
// Output: 9

const array = [3,7,2,9,4]


// selection sort 
// for (let i = 0; i < array.length - 1; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//          if (array[i] > array[j]) {
//            let temp = array[i];
//            array[i] = array[j];
//            array[j] = temp;
//          }
//     }
    
// }

// const HighestNumber = array[array.length - 1]

//better approach 

let max = array[0]

for (let index = 0; index < array.length; index++) {
   if (array[index] > max) {
      max = array[index];
   }
    
}



console.log(max)