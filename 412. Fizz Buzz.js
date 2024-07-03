/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  let result = [];
  let num = 0;
  while (num < n) {
    result[num] = (num + 1).toString();
    if (result[num] % 3 === 0 && result[num] % 5 === 0) {
      result[num] = "FizzBuzz";
    } else if (result[num] % 3 === 0) {
      result[num] = "Fizz";
    } else if (result[num] % 5 === 0) {
      result[num] = "Buzz";
    }
    num++;
  }
  return result;
};
