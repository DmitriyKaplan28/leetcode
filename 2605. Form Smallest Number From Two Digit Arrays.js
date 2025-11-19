/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minNumber = function(nums1, nums2) {
    const set2 = new Set(nums2);

  let common = Infinity;
  for (let d of nums1) {
    if (set2.has(d)) {
      common = Math.min(common, d);
    }
  }
  if (common !== Infinity) return common;

  const min1 = Math.min(...nums1);
  const min2 = Math.min(...nums2);

  return Math.min(min1 * 10 + min2, min2 * 10 + min1)
};
