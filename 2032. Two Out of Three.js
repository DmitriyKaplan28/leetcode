/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function (nums1, nums2, nums3) {
  let res = []
  res = compareArrays(nums1,nums2,res)
  res = compareArrays(nums1,nums3,res)
  res = compareArrays(nums2,nums3,res)
  return res
};

const compareArrays = (arr1, arr2, final) => {
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i]) && !final.includes(arr1[i])) final.push(arr1[i])
  }
  return final
};

