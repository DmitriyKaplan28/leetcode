/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function(nums) {
    const filtered = nums.filter(num => num % 6 === 0);
  if (filtered.length === 0) return 0;
  const sum = filtered.reduce((acc, num) => acc + num, 0);
  return Math.floor(sum / filtered.length);
};
