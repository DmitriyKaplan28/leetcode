/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  const uniqSortedArr = Array.from(new Set(nums.sort((a, b) => b - a)));
  if (uniqSortedArr.length < 3) return Math.max(...uniqSortedArr);
  else return uniqSortedArr[2];
};

console.log(thirdMax([2, 2, 3, 1]));
