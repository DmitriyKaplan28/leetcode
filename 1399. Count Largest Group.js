/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function (n) {
  const groupSizeBySum = {};
  let maxSize = 0;

  for (let i = 1; i <= n; i++) {
    let x = i;
    let sum = 0;
    while (x > 0) {
      sum += x % 10;
      x = Math.floor(x / 10);
    }
    groupSizeBySum[sum] = (groupSizeBySum[sum] || 0) + 1;
    if (groupSizeBySum[sum] > maxSize) {
      maxSize = groupSizeBySum[sum];
    }
  }

  let countMax = 0;
  for (let key in groupSizeBySum) {
    if (groupSizeBySum[key] === maxSize) {
      countMax++;
    }
  }

  return countMax;
};
