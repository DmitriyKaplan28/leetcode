/**
 * @param {string} s
 * @return {number}
 */
var minimizedStringLength = function (s) {
  const arr = s.split("");
  const set = new Set(arr);
  return set.size;
};
