/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function(code, k) {
    const n = code.length;
  const result = new Array(n).fill(0);

  if (k === 0) return result;

  for (let i = 0; i < n; i++) {
    let sum = 0;
    for (let j = 1; j <= Math.abs(k); j++) {
      const index = k > 0
        ? (i + j) % n
        : (i - j + n) % n;
      sum += code[index];
    }
    result[i] = sum;
  }

  return result;
};
