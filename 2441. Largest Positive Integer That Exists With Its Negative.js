/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
    const s = new Set(nums);
  let best = -1;

  for (const x of nums) {
    if (x > 0 && s.has(-x)) {
      if (x > best) best = x;
    }
  }

  return best;
};
