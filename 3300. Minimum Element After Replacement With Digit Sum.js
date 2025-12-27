/**
 * @param {number[]} nums
 * @return {number}
 */
var minElement = function (nums) {
  const digitSum = (num) => {
    let sum = 0;
    while (num > 0) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }
    return sum;
  };

  let min = Infinity;

  for (let num of nums) {
    const sum = digitSum(num);
    min = Math.min(min, sum);
  }

  return min;
};
