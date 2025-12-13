/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
  const result = [];

  const isSelfDividing = (num) => {
    let n = num;
    while (n > 0) {
      const digit = n % 10;
      if (digit === 0 || num % digit !== 0) {
        return false;
      }
      n = Math.floor(n / 10);
    }
    return true;
  };

  for (let i = left; i <= right; i++) {
    if (isSelfDividing(i)) {
      result.push(i);
    }
  }

  return result;
};

console.log(selfDividingNumbers(1, 22));
console.log(selfDividingNumbers(47, 85));