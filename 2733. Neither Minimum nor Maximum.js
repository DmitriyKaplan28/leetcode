/**
 * @param {number[]} nums
 * @return {number}
 */
var findNonMinOrMax = function (nums) {
  const minAndMax = [Math.min(...nums), Math.max(...nums)];
  const noMinOrMax = nums.find((num) => !minAndMax.includes(num));
  return noMinOrMax ? noMinOrMax : -1;
};
console.log(findNonMinOrMax([1, 2, 3, 4]));
