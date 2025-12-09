const array = [1,2,2,3,4,3];
let orginalArry = [];


// //remove duplicates
// for (let index = 0; index < array.length; index++) {
//       if (!orginalArry.includes(array[index])) {
//          orginalArry.push(array[index])
//       }
// }

///

const seen= {}
for (let i = 0; i < array.length; i++) {
     if(!seen[array[i]]){
        orginalArry.push(array[i]);
        seen[array[i]] = true
     }
  
}
console.log(orginalArry)

