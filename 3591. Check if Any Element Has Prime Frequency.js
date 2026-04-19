/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPrimeFrequency = function(nums) {
    const freq = {};

  for (const num of nums) {
    freq[num] = (freq[num] || 0) + 1;
  }

  function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;

    for (let i = 5; i * i <= n; i += 6) {
      if (n % i === 0 || n % (i + 2) === 0) {
        return false;
      }
    }
    return true;
  }

  for (const key in freq) {
    if (isPrime(freq[key])) {
      return true;
    }
  }

  return false;
};
