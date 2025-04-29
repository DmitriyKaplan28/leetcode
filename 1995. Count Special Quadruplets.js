/**
 * @param {number[]} nums
 * @return {number}
 */
var countQuadruplets = function (nums) {
  const n = nums.length;
  let count = 0;

  const sumMap = new Map();

  for (let d = n - 1; d >= 3; d--) {
    for (let a = 0; a < d - 2; a++) {
      for (let b = a + 1; b < d - 1; b++) {
        for (let c = b + 1; c < d; c++) {
          if (nums[a] + nums[b] + nums[c] === nums[d]) {
            count++;
          }
        }
      }
    }
  }

  return count;
};
