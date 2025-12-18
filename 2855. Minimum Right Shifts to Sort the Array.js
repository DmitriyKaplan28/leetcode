/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumRightShifts = function(nums) {
    const n = nums.length;
  let drops = 0;
  let dropIndex = -1;

  for (let i = 0; i < n; i++) {
    const next = nums[(i + 1) % n];
    if (nums[i] > next) {
      drops++;
      dropIndex = i;
    }
  }

  if (drops > 1) return -1;
  if (drops === 0) return 0;

  return n - (dropIndex + 1);
};
