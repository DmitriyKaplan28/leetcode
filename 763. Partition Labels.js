/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
  const lastIndex = new Array(26).fill(-1);
  for (let i = 0; i < s.length; i++) {
    lastIndex[s.charCodeAt(i) - 97] = i;
  }

  const result = [];
  let start = 0;
  let end = 0;
  for (let i = 0; i < s.length; i++) {
    end = Math.max(end, lastIndex[s.charCodeAt(i) - 97]);
    if (i === end) {
      result.push(end - start + 1);
      start = i + 1;
    }
  }

  return result;
};

console.log(partitionLabels("ababcbacadefegdehijhklij"));
console.log(partitionLabels("eccbbbbdec"));