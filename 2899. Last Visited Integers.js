/**
 * @param {number[]} nums
 * @return {number[]}
 */
var lastVisitedIntegers = function (nums) {
  let seen = [];
  let ans = [];
  let consecutiveMinusOnes = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== -1) {
      seen.unshift(nums[i]);
      consecutiveMinusOnes = 0;
    } else {
      consecutiveMinusOnes++;

      if (consecutiveMinusOnes <= seen.length) {
        ans.push(seen[consecutiveMinusOnes - 1]);
      } else {
        ans.push(-1);
      }
    }
  }

  return ans;
};
