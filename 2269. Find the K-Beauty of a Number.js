/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
var divisorSubstrings = function (num, k) {
  const numStr = num.toString();
  let count = 0;

  for (let i = 0; i <= numStr.length - k; i++) {
    const substring = numStr.substring(i, i + k);
    const subNum = parseInt(substring);

    if (subNum !== 0 && num % subNum === 0) {
      count++;
    }
  }

  return count;
};
