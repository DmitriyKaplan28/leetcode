/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function (nums) {
  nums.sort((a, b) => a - b);
  const median = nums[Math.floor(nums.length / 2)];
  let moves = 0;
  for (const x of nums) moves += Math.abs(x - median);
  return moves;
};

console.log(minMoves2([1, 2, 3]));
console.log(minMoves2([1, 10, 2, 9]));
