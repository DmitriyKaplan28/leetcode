/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  let sortedNums = [...nums].sort((a, b) => a - b);
  let res = nums.map((num, idx) => {
    return sortedNums.indexOf(num);
  });
  return res;
};
