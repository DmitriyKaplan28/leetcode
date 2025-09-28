/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
  const uniquePositives = new Set();
  for (const value of nums) {
    if (value > 0) uniquePositives.add(value);
  }
  return uniquePositives.size;
};
