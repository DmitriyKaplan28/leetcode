/**
 * @param {number} n
 * @return {number}
 */
const obj = {};
var climbStairs = function (n) {
  if (n <= 2) return n;

  if (!obj[n]) {
    obj[n] = climbStairs(n - 1) + climbStairs(n - 2);
  }
  return obj[n];
};
