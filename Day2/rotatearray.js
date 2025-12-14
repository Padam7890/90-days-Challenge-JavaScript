const array = [1, 2, 3, 4, 5];
const rotateIndex = 2;
const newArray = [];

// for (let index = rotateIndex; index < array.length; index++) {
//   newArray.push(array[index])
// }
// for (let index = 0; index < rotateIndex; index++) {
//     newArray.push(array[index])
    
// }

for (let i = 0; i < array.length; i++) {
   const newIndex = (i - rotateIndex + array.length) % array.length;
    newArray[newIndex] = array[i]
}

console.log(newArray);
