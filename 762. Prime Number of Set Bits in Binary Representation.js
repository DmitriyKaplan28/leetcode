/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var countPrimeSetBits = function (left, right) {
  const primeCounts = new Set([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31]);
  let count = 0;
  for (let n = left; n <= right; n++) {
    let x = n;
    let bits = 0;
    while (x !== 0) {
      x &= x - 1;
      bits++;
    }
    if (primeCounts.has(bits)) count++;
  }
  return count;
};

console.log(countPrimeSetBits(6, 10));
console.log(countPrimeSetBits(10, 15));
