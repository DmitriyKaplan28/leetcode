/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSubsequence = function(nums, k) {
   const indexed = nums.map((num, index) => ({ num, index }));
  const topK = indexed.sort((a, b) => b.num - a.num).slice(0, k);
  topK.sort((a, b) => a.index - b.index);
  return topK.map(item => item.num); 
};
