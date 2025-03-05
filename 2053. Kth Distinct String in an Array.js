/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function (arr, k) {
  const map = {};
  let distinct = [];
  for (let i = 0; i < arr.length; i++) {
    if (!map[arr[i]]) map[arr[i]] = 1;
    else map[arr[i]]++;
  }
  for (const [key, value] of Object.entries(map)) {
    if (value === 1) distinct.push(key);
  }
  return distinct[k - 1] ? distinct[k - 1] : "";
};
