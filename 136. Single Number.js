/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let sortedNums = nums.sort();
  for (let i = 0; i < sortedNums.length; i++) {
    if (
      sortedNums[i - 1] !== sortedNums[i] &&
      sortedNums[i + 1] !== sortedNums[i]
    ) {
      return sortedNums[i];
    }
  }
};
