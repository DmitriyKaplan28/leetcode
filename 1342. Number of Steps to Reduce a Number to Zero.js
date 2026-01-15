/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
  let steps = 0;
  let temp = num;
  while (temp > 0) {
    if (temp % 2 === 0) {
      temp = temp / 2;
    } else {
      temp = temp - 1;
    }
    steps++;
  }
  return steps;
};
console.log(numberOfSteps(14));
console.log(numberOfSteps(8));
console.log(numberOfSteps(123));
