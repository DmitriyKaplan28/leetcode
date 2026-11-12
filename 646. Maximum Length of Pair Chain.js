/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function (pairs) {
  pairs.sort((a, b) => a[1] - b[1]);

  let length = 0;
  let lastRight = -Infinity;

  for (const [left, right] of pairs) {
    if (left > lastRight) {
      length++;
      lastRight = right;
    }
  }

  return length;
};
