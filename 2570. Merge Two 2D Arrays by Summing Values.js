/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function (nums1, nums2) {
  let res = [];
  let i = 0,
    j = 0;
  while (i < nums1.length && j < nums2.length) {
    const [id1, val1] = nums1[i];
    const [id2, val2] = nums2[j];
    if (id1 < id2) {
      res.push([id1, val1]);
      i++;
    } else if (id2 < id1) {
      res.push([id2, val2]);
      j++;
    } else {
      res.push([id1, val1 + val2]);
      i++;
      j++;
    }
  }
  while (i < nums1.length) {
    res.push(nums1[i]);
    i++;
  }
  while (j < nums2.length) {
    res.push(nums2[j]);
    j++;
  }
  return res;
};
