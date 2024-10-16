/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const result = [];
  function backtrack(start, currentSubset) {
    result.push([...currentSubset]);
    for (let i = start; i < nums.length; i++) {
      currentSubset.push(nums[i]);
      backtrack(i + 1, currentSubset);
      currentSubset.pop();
    }
  }
  backtrack(0, []);

  return result;
};
