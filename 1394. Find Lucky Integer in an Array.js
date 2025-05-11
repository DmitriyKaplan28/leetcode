/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
  const freqMap = {};
  for (const num of arr) {
    freqMap[num] = (freqMap[num] || 0) + 1;
  }

  let result = -1;
  for (const num in freqMap) {
    const val = Number(num);
    if (freqMap[num] === val) {
      result = Math.max(result, val);
    }
  }

  return result;
};
