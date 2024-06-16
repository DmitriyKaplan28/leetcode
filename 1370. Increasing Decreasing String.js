/**
 * @param {string} s
 * @return {string}
 */
var sortString = function (s) {
  s = s.split``.sort().join``;
  let result = "";
  while (s.length) {
    result += s.match(/([a-z])(?!\1)/gi).join``;
    s = s.replace(/([a-z])(?!\1)/gi, "");
    result += (s.match(/([a-z])(?!\1)/gi) || []).reverse().join``;
    s = s.replace(/([a-z])(?!\1)/gi, "");
  }
  return result;
};
