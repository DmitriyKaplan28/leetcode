/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestAbsent = function(nums) {
    const n = nums.length;
  const sum = nums.reduce((acc, val) => acc + val, 0);
  const avg = sum / n;

  const set = new Set(nums);

  let candidate = Math.floor(avg) + 1;

  if (candidate <= 0) candidate = 1;

  while (set.has(candidate)) {
    candidate++;
  }

  return candidate;
};
