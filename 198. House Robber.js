/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (!nums || nums.length === 0) return 0;
  let prevTwo = 0;
  let prevOne = 0;

  for (let amount of nums) {
    const takeCurrent = prevTwo + amount;
    const skipCurrent = prevOne;
    const currentBest = Math.max(takeCurrent, skipCurrent);
    prevTwo = prevOne;
    prevOne = currentBest;
  }

  return prevOne;
};
console.log(rob([1, 2, 3, 1]));
console.log(rob([2, 7, 9, 3, 1]));
