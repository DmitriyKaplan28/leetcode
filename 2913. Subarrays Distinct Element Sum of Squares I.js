/**
 * @param {number[]} nums
 * @return {number}
 */
var sumCounts = function (nums) {
  const n = nums.length;
  let result = 0;

  for (let i = 0; i < n; i++) {
    const freq = new Map();
    let distinct = 0;

    for (let j = i; j < n; j++) {
      const val = nums[j];
      if (!freq.has(val)) {
        freq.set(val, 1);
        distinct++;
      } else {
        freq.set(val, freq.get(val) + 1);
      }

      result += distinct * distinct;
    }
  }

  return result;
};

console.log(sumCounts([1,2,1]));
console.log(sumCounts([1,1]));

