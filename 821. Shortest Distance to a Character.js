/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function (s, c) {
  const res = [];
  const indexes = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === c) indexes.push(i);
  }

  let index = 0;
  let left = indexes[index];
  let right = indexes[index];
  for (let i = 0; i < s.length; i++) {
    if (i === right) {
      left = indexes[index++];
      if (index === indexes.length) index--;
      right = indexes[index];
    }
    const shortestDistance = Math.min(Math.abs(i - left), Math.abs(i - right));
    res.push(shortestDistance);
  }

  return res;
};
