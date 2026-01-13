/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function (nums) {
  const n = nums.length;
  if (n < 3) return 0;

  let count = 0;

  for (let i = 0; i < n - 2; i++) {
    const diff = nums[i + 1] - nums[i];

    for (let j = i + 2; j < n; j++) {
      if (nums[j] - nums[j - 1] === diff) {
        count++;
      } else {
        break;
      }
    }
  }

  return count;
};
console.log(numberOfArithmeticSlices([1, 2, 3, 4]));
console.log(numberOfArithmeticSlices([1]));