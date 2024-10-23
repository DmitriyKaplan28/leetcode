/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
  const n = nums.length;
  let duplicate;
  let missing;

  const freq = new Array(n + 1).fill(0);

  for (let num of nums) {
    freq[num]++;
  }

  for (let i = 1; i <= n; i++) {
    if (freq[i] === 0) {
      missing = i;
    } else if (freq[i] === 2) {
      duplicate = i;
    }
  }

  return [duplicate, missing];
};
