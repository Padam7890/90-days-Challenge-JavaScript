const array = [1, 2, 3, 0, 2, 3, 0];
let pos = 0;

for (let i = 0; i < array.length; i++) {
   if (array[i] !== 0) {
     array[pos] = array[i];
     pos++
   }
}

while(pos < array.length){
    array[pos] = 0;
    pos++
}
console.log(array)