var reverseVowels = function(s) {
  const vowels = new Set(["a","e","i","o","u","A","E","I","O","U"]);
  let arr = s.split("");
  let left = 0, right = arr.length - 1;
  console.log(vowels)

  while (left < right) {
    if (!vowels.has(arr[left])) left++;
    else if (!vowels.has(arr[right])) right--;
    else {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }

  return arr.join("");
};

console.log(reverseVowels("IceCrEam"))
