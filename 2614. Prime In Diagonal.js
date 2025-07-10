/**
 * @param {number[][]} nums
 * @return {number}
 */
var diagonalPrime = function (nums) {
  function isPrime(n) {
    if (n <= 1) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;
    for (let i = 3; i * i <= n; i += 2) {
      if (n % i === 0) return false;
    }
    return true;
  }
  const n = nums.length;
  let maxPrime = 0;
  for (let i = 0; i < n; i++) {
    let d1 = nums[i][i];
    let d2 = nums[i][n - i - 1];
    if (isPrime(d1)) maxPrime = Math.max(maxPrime, d1);
    if (isPrime(d2)) maxPrime = Math.max(maxPrime, d2);
  }
  return maxPrime;
};
