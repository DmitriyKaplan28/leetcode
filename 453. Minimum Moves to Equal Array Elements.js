/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function (nums) {
  const minimum = Math.min(...nums);

  return nums.reduce((moves, value) => moves + value - minimum, 0);
};
