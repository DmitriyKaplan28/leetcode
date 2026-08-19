/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function (nums1, nums2, nums3, nums4) {
  const pairSums = new Map();

  for (const first of nums1) {
    for (const second of nums2) {
      const sum = first + second;
      pairSums.set(sum, (pairSums.get(sum) || 0) + 1);
    }
  }

  let count = 0;
  for (const third of nums3) {
    for (const fourth of nums4) {
      count += pairSums.get(-(third + fourth)) || 0;
    }
  }

  return count;
};
