/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
  if (n <= 0 || (n & (n - 1)) !== 0) {
    return false;
  }

  return (n & 0xaaaaaaaa) === 0;
};

console.log(isPowerOfFour(16));
console.log(isPowerOfFour(5));
console.log(isPowerOfFour(1));