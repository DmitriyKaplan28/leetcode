/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
var countBalls = function (lowLimit, highLimit) {
  const boxes = {};
  let maxBalls = 0;

  for (let num = lowLimit; num <= highLimit; num++) {
    let sum = 0,
      temp = num;

    while (temp > 0) {
      sum += temp % 10;
      temp = Math.floor(temp / 10);
    }

    boxes[sum] = (boxes[sum] || 0) + 1;
    maxBalls = Math.max(maxBalls, boxes[sum]);
  }

  return maxBalls;
};

console.log(countBalls(1, 10));
console.log(countBalls(5, 15));
console.log(countBalls(19, 28));
