/**
 * @param {number[]} nums
 * @return {number}
 */
var alternatingSubarray = function (nums) {
  if (nums.length < 2) return -1;
  let maxLength = -1;

  for (let start = 0; start < nums.length - 1; start++) {
    if (nums[start + 1] === nums[start] + 1) {
      let currentLength = 2;
      let expectedDiff = -1;

      for (let i = start + 2; i < nums.length; i++) {
        if (nums[i] - nums[i - 1] === expectedDiff) {
          currentLength++;
          expectedDiff = -expectedDiff;
        } else {
          break;
        }
      }

      maxLength = Math.max(maxLength, currentLength);
    }
  }

  return maxLength;
};
