/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function (matrix) {
  const min = matrix.map((x) => Math.min(...x));
  const max = matrix[0].map((_, i) => Math.max(...matrix.map((x) => x[i])));
  return min.filter((v) => max.includes(v));
};
