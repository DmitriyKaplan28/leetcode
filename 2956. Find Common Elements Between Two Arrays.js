/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var findIntersectionValues = function (nums1, nums2) {
  const count1 = countCommon(nums1, nums2)
  const count2 = countCommon(nums2, nums1)
  return [count1, count2]
};

const countCommon = function (firstArr, arrToCheck) {
    let count = 0
    for (let i = 0; i < firstArr.length; i++) {
        if (arrToCheck.includes(firstArr[i])) count ++;
    }
    return count
  };