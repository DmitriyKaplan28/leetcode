/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  const results = [];
  nums.sort((a, b) => a - b);
  const used = new Array(nums.length).fill(false);
  function backtrack(path) {
    if (path.length === nums.length) {
      results.push([...path]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue;
      if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue;
      used[i] = true;
      path.push(nums[i]);
      backtrack(path);
      path.pop();
      used[i] = false;
    }
  }
  backtrack([]);
  return results;
};

console.log(permuteUnique([1,1,2]));
console.log(permuteUnique([1,2,3]));
