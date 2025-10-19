/**
 * @param {number[]} nums
 * @return {number}
 */
var unequalTriplets = function (nums) {
  const freq = new Map();
  for (const value of nums) {
    freq.set(value, (freq.get(value) || 0) + 1);
  }

  const counts = Array.from(freq.values());
  const total = nums.length;
  let prefix = 0;
  let result = 0;

  for (const count of counts) {
    const suffix = total - prefix - count;
    result += prefix * count * suffix;
    prefix += count;
  }

  return result;
};

console.log(unequalTriplets([4, 4, 2, 4, 3]));
console.log(unequalTriplets([1, 1, 1, 1, 1]));
