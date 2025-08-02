/**
 * @param {number[]} nums
 * @return {number}
 */
var countHillValley = function(nums) {
   const filtered = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      filtered.push(nums[i]);
    }
  }

  let count = 0;
  for (let i = 1; i < filtered.length - 1; i++) {
    const prev = filtered[i - 1];
    const curr = filtered[i];
    const next = filtered[i + 1];

    if ((curr > prev && curr > next) || (curr < prev && curr < next)) {
      count++;
    }
  }

  return count; 
};
