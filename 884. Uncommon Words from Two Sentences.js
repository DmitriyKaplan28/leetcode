/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function (s1, s2) {
  const arr = [...s1.split(" "), ...s2.split(" ")];
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (!map[arr[i]]) map[arr[i]] = 1;
    else map[arr[i]]++;
  }
  let res = [];
  for (const key of Object.keys(map)) {
    if (map[key] === 1) res.push(key);
  }
  return res;
};
