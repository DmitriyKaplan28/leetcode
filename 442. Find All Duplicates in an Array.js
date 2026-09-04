/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
  const duplicates = [];

  for (const value of nums) {
    const index = Math.abs(value) - 1;

    if (nums[index] < 0) {
      duplicates.push(Math.abs(value));
    } else {
      nums[index] = -nums[index];
    }
  }

  return duplicates;
};
