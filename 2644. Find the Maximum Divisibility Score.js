/**
 * @param {number[]} nums
 * @param {number[]} divisors
 * @return {number}
 */
var maxDivScore = function(nums, divisors) {
    let maxScore = -1;
  let bestDivisor = Infinity;

  for (const divisor of divisors) {
    let score = 0;

    for (const num of nums) {
      if (num % divisor === 0) score++;
    }

    if (score > maxScore || (score === maxScore && divisor < bestDivisor)) {
      maxScore = score;
      bestDivisor = divisor;
    }
  }

  return bestDivisor;
};
