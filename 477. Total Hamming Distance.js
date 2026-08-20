/**
 * @param {number[]} nums
 * @return {number}
 */
var totalHammingDistance = function (nums) {
  let totalDistance = 0;

  for (let bit = 0; bit < 32; bit++) {
    let ones = 0;

    for (const number of nums) {
      ones += (number >>> bit) & 1;
    }

    totalDistance += ones * (nums.length - ones);
  }

  return totalDistance;
};
