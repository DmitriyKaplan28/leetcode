/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumSum = function(nums) {
      const n = nums.length;
  const leftMin = Array(n).fill(Infinity);
  const rightMin = Array(n).fill(Infinity);

  let minLeftVal = Infinity;
  for (let j = 0; j < n; j++) {
    if (minLeftVal < nums[j]) leftMin[j] = minLeftVal;
    minLeftVal = Math.min(minLeftVal, nums[j]);
  }

  let minRightVal = Infinity;
  for (let j = n - 1; j >= 0; j--) {
    if (minRightVal < nums[j]) rightMin[j] = minRightVal;
    minRightVal = Math.min(minRightVal, nums[j]);
  }

  let result = Infinity;
  for (let j = 0; j < n; j++) {
    if (leftMin[j] !== Infinity && rightMin[j] !== Infinity) {
      result = Math.min(result, leftMin[j] + nums[j] + rightMin[j]);
    }
  }

  return result === Infinity ? -1 : result;
};
