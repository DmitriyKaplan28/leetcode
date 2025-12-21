/**
 * @param {number[]} nums
 * @return {number}
 */
var countBeautifulPairs = function(nums) {
  const gcd = (a, b) => {
    while (b !== 0) {
      [a, b] = [b, a % b];
    }
    return a;
  };

  const firstDigitCount = Array(10).fill(0);
  let result = 0;

  for (let num of nums) {
    const lastDigit = num % 10;

    for (let d = 1; d <= 9; d++) {
      if (firstDigitCount[d] > 0 && gcd(d, lastDigit) === 1) {
        result += firstDigitCount[d];
      }
    }

    let firstDigit = num;
    while (firstDigit >= 10) {
      firstDigit = Math.floor(firstDigit / 10);
    }

    firstDigitCount[firstDigit]++;
  }

  return result;
  
    
};
