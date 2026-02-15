/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var longestAlternatingSubarray = function(nums, threshold) {
    let maxLen = 0;
  let i = 0;

  while (i < nums.length) {
    if (nums[i] % 2 !== 0 || nums[i] > threshold) {
      i++;
      continue;
    }

    let j = i;
    let length = 1;

    while (
      j + 1 < nums.length &&
      nums[j + 1] <= threshold &&
      nums[j] % 2 !== nums[j + 1] % 2
    ) {
      j++;
      length++;
    }

    maxLen = Math.max(maxLen, length);
    i = j + 1;
  }

  return maxLen;
};
