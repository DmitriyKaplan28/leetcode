/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var addedInteger = function(nums1, nums2) {
    nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);

  const x = nums2[0] - nums1[0];

  for (let i = 0; i < nums1.length; i++) {
    if (nums1[i] + x !== nums2[i]) {
      return null;
    }
  }

  return x;
};
