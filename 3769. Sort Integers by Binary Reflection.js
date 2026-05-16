/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortByReflection = function(nums) {
    return nums.slice().sort((a, b) => {
    const ra = parseInt(a.toString(2).split('').reverse().join(''), 2);
    const rb = parseInt(b.toString(2).split('').reverse().join(''), 2);

    return ra === rb ? a - b : ra - rb;
  });
};
