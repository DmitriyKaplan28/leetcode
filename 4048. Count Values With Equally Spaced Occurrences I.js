/**
 * @param {number[]} nums
 * @return {number}
 */
var countSpecialIntegers = function (nums) {
  const positions = new Map();

  for (let i = 0; i < nums.length; i++) {
    const value = nums[i];
    if (!positions.has(value)) {
      positions.set(value, []);
    }
    positions.get(value).push(i);
  }

  let count = 0;

  for (const indices of positions.values()) {
    if (
      indices.length === 3 &&
      indices[1] - indices[0] === indices[2] - indices[1]
    ) {
      count++;
    }
  }

  return count;
};
