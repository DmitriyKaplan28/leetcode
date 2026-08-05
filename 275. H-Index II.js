/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
  let left = 0;
  let right = citations.length - 1;
  let n = citations.length;
  let result = 0;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const h = n - mid;
    if (citations[mid] >= h) {
      result = h;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return result;
};
