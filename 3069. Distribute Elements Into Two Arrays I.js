/**
 * @param {number[]} nums
 * @return {number[]}
 */
var resultArray = function(nums) {
    const arr1 = [];
  const arr2 = [];

  arr1.push(nums[0]);
  arr2.push(nums[1]);

  for (let i = 2; i < nums.length; i++) {
    const last1 = arr1[arr1.length - 1];
    const last2 = arr2[arr2.length - 1];

    if (last1 > last2) {
      arr1.push(nums[i]);
    } else {
      arr2.push(nums[i]);
    }
  }

  return arr1.concat(arr2);
};
