/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 */
var getMinDistance = function (nums, target, start) {
  let minDist = Infinity;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      minDist = Math.min(minDist, Math.abs(i - start));
    }
  }
  return minDist;
};

console.log(getMinDistance([1, 2, 3, 4, 5], 5, 3));
console.log(getMinDistance([1], 1, 0));
console.log(getMinDistance([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1, 0));
