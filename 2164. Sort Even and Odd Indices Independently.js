/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortEvenOdd = function(nums) {
    const even = [];
  const odd = [];

  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) even.push(nums[i]);
    else odd.push(nums[i]);
  }

  even.sort((a, b) => a - b);
  odd.sort((a, b) => b - a);

  const result = [];
  let evenIdx = 0, oddIdx = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) result.push(even[evenIdx++]);
    else result.push(odd[oddIdx++]);
  }

  return result;
};
