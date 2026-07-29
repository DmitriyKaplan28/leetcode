/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
  const flatArr = [];
  matrix.forEach((row) => {
    flatArr.push(...row);
  });
  return flatArr.sort((a,b) => a - b)[k - 1];
};
