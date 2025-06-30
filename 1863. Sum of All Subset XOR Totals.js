/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function (nums) {
  function dfs(index, currXor) {
    if (index === nums.length) {
      return currXor;
    }
    const withCurr = dfs(index + 1, currXor ^ nums[index]);
    const withoutCurr = dfs(index + 1, currXor);
    return withCurr + withoutCurr;
  }
  return dfs(0, 0);
};
