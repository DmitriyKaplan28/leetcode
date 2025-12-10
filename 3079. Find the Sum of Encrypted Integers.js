/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfEncryptedInt = function (nums) {
  let sum = 0;

  for (let num of nums) {
    const str = num.toString();
    const maxDigit = Math.max(...str.split("").map(Number));

    const encrypted = parseInt(maxDigit.toString().repeat(str.length));

    sum += encrypted;
  }

  return sum;
};
console.log(sumOfEncryptedInt([1, 2, 3]));
console.log(sumOfEncryptedInt([10, 21, 31]));