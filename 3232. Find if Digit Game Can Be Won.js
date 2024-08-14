/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canAliceWin = function (nums) {
  let single = 0;
  let double = 0;
  nums.forEach((num) => {
    if (num < 10) single += num;
    else double += num;
  });
  return single !== double;
};

console.log(canAliceWin([1, 2, 3, 4, 10]));
