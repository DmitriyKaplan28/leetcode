/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  const arr = s.split(" ").filter((item) => item.length > 0);
  return arr[arr.length - 1].length;
};
