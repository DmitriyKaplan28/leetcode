/**
 * @param {number[]} nums
 * @return {number[]}
 */
var constructTransformedArray = function(nums) {
    const n = nums.length;
  const result = new Array(n);

  for (let i = 0; i < n; i++) {
    const steps = nums[i];

    if (steps === 0) {
      result[i] = nums[i];
      continue;
    }

    let newIndex = (i + steps) % n;
    if (newIndex < 0) newIndex += n;

    result[i] = nums[newIndex];
  }

  return result;
};
