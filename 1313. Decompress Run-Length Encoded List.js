/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function (nums) {
  const result = [];
  for (let i = 0; i < nums.length; i += 2) {
    const freq = nums[i];
    const val = nums[i + 1];
    for (let j = 0; j < freq; j++) {
      result.push(val);
    }
  }
  return result;
};

console.log(decompressRLElist([1, 2, 3, 4]));
console.log(decompressRLElist([1, 1, 2, 3]));