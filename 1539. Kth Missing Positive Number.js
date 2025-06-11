/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function (arr, k) {
  let missingCount = 0;
  let currentNumber = 1;
  let i = 0;

  while (i < arr.length) {
    if (arr[i] === currentNumber) {
      i++;
    } else {
      missingCount++;
      if (missingCount === k) {
        return currentNumber;
      }
    }
    currentNumber++;
  }

  return currentNumber + (k - missingCount - 1);
};

console.log(findKthPositive([2, 3, 4, 7, 11], 5));
console.log(findKthPositive([1, 2, 3, 4], 2));