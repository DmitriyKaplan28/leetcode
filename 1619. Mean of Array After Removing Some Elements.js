/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function(arr) {
  const n = arr.length;
  const removeCount = Math.floor(n * 0.05);

  arr.sort((a, b) => a - b);

  const trimmed = arr.slice(removeCount, n - removeCount);

  const sum = trimmed.reduce((acc, val) => acc + val, 0);

  return sum / trimmed.length;
};
