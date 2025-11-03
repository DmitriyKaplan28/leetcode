/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSum = function (nums) {
  const groups = Array.from({ length: 10 }, () => ({ first: -1, second: -1 }));

  const getMaxDigit = (num) => {
    if (num === 0) return 0;
    let maxDigit = 0;
    let x = num;
    while (x > 0) {
      const d = x % 10;
      if (d > maxDigit) maxDigit = d;
      x = Math.floor(x / 10);
    }
    return maxDigit;
  };

  for (const num of nums) {
    const d = getMaxDigit(num);
    const g = groups[d];
    if (num > g.first) {
      g.second = g.first;
      g.first = num;
    } else if (num > g.second) {
      g.second = num;
    }
  }

  let answer = -1;
  for (const { first, second } of groups) {
    if (second !== -1) {
      const sum = first + second;
      if (sum > answer) answer = sum;
    }
  }

  return answer;
};
