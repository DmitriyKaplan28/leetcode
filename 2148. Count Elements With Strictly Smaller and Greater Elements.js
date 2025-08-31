/**
 * @param {number[]} nums
 * @return {number}
 */
var countElements = function(nums) {
    if (nums.length < 3) return 0;

  const min = Math.min(...nums);
  const max = Math.max(...nums);

  return nums.reduce((count, num) => {
    if (num > min && num < max) {
      count++;
    }
    return count;
  }, 0);
};
