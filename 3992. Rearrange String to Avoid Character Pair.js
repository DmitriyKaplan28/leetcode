/**
 * @param {string} s
 * @param {character} x
 * @param {character} y
 * @return {string}
 */
var rearrangeString = function (s, x, y) {
  let xCount = 0;
  let yCount = 0;

  for (const ch of s) {
    if (ch === x) xCount++;
    else if (ch === y) yCount++;
  }

  const result = [];

  for (let i = 0; i < yCount; i++) {
    result.push(y);
  }

  for (const ch of s) {
    if (ch !== x && ch !== y) {
      result.push(ch);
    }
  }

  for (let i = 0; i < xCount; i++) {
    result.push(x);
  }

  return result.join("");
};
