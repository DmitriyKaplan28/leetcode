/**
 * @param {string} s
 * @return {number}
 */
var minSwaps = function (s) {
  let open = 0;
  let close = 0;
  let swaps = 0;

  for (let char of s) {
    if (char === "[") {
      open++;
    } else {
      if (open > 0) {
        open--;
      } else {
        close++;
      }
    }
  }

  return Math.ceil(close / 2);
};

console.log(minSwaps("][][")); // Expected: 1
console.log(minSwaps("]]][[[")); // Expected: 2
console.log(minSwaps("[]")); // Expected: 0
