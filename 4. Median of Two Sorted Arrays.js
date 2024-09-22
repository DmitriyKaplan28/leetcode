/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const arr = [...nums1, ...nums2].sort((a, b) => a - b);
  const middleIndex = Math.floor(arr.length / 2);
  if (arr.length % 2 === 0) {
    return (arr[middleIndex - 1] + arr[middleIndex]) / 2;
  }
  return arr[middleIndex];
};
