//Reverse Array
const array = [1, 3, 4, 2, 3];
let left = 0;
let right = array.length - 1;

while (left < right) {
  [array[left], array[right]] = [array[right], array[left]];
  left++;
  right--;
}

console.log(array);
