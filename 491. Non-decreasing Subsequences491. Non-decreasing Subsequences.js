/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function (nums) {
  const result = [];

  const backtrack = (start, path) => {
    if (path.length >= 2) {
      result.push([...path]);
    }

    const used = new Set();

    for (let index = start; index < nums.length; index++) {
      if (used.has(nums[index])) {
        continue;
      }

      if (path.length > 0 && nums[index] < path[path.length - 1]) {
        continue;
      }

      used.add(nums[index]);
      path.push(nums[index]);
      backtrack(index + 1, path);
      path.pop();
    }
  };

  backtrack(0, []);
  return result;
};
