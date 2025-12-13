//Two SUM

const array = [10, 20, 30, 20, 30];
const target = 40;

let found = false;
const pairs = [];

for (let i = 0; i < array.length; i++) {
  for (let j = i + 1; j < array.length; j++) {
    if (array[i] + array[j] === target) {
      found = true;
      pairs.push(array[i], array[j]);
      break;
    }
  }
  if (found) break;
}

console.log(found);
console.log(pairs);

