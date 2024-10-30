/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
  const strNums = nums.map(String);
  strNums.sort((a, b) => b + a - (a + b));
  const result = strNums.join("");

  return result[0] === "0" ? "0" : result;
};

console.log(largestNumber([3, 30, 34, 5, 9]));
