/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
  let even = [];
  let odd = [];

  for (let num of nums) {
    if (num % 2 === 0) {
      even.push(num);
    } else {
      odd.push(num);
    }
  }

  return [...even, ...odd];
};
