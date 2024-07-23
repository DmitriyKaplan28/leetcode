/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function (strs) {
  let strLength = strs[0].length;
  let count = 0;
  for (let col = 0; col < strLength; col++) {
    for (let row = 0; row < strs.length - 1; row++) {
      if (strs[row][col] > strs[row + 1][col]) {
        count++;
        break;
      }
    }
  }
  return count;
};
