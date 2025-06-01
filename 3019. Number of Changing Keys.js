/**
 * @param {string} s
 * @return {number}
 */
var countKeyChanges = function (s) {
  let count = 0;
  if (s.length === 0) return count;
  const str = s.toLowerCase();
  for (let i = 1; i < str.length; i++) {
    if (str[i] !== str[i - 1]) {
      count++;
    }
  }
  return count;
};
