/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function(m, n, ops) {
   if (ops.length === 0) {
    return m * n;
  }
  let minA = m;
  let minB = n;
  for (const [ai, bi] of ops) {
    minA = Math.min(minA, ai);
    minB = Math.min(minB, bi);
  }
  return minA * minB; 
};
