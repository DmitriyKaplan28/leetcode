/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function(nums) {
    let neg = 0, pos = 0;
  
  for (let num of nums) {
    if (num > 0) pos++;
    else if (num < 0) neg++;
  }
  
  return Math.max(pos, neg);
};
