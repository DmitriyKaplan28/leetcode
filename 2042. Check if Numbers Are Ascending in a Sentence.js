/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function (s) {
  const nums = s.split(" ").filter((el) => !isNaN(el)).map((el) => parseInt(el));
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] <= nums[i - 1]) return false;
  }

  return true;
};

console.log(areNumbersAscending("1 box has 3 blue 4 red 6 green and 12 yellow marbles"));
console.log(areNumbersAscending("hello world 5 x 5"));
