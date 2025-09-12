/**
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function (nums) {
  let closest = nums[0];
  for (let i = 1; i < nums.length; i++) {
    const current = nums[i];
    const absCurrent = Math.abs(current);
    const absClosest = Math.abs(closest);
    if (
      absCurrent < absClosest ||
      (absCurrent === absClosest && current > closest)
    ) {
      closest = current;
    }
  }
  return closest;
};
