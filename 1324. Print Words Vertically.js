/**
 * @param {string} s
 * @return {string[]}
 */
var printVertically = function (s) {
  const words = s.split(" ");
  const maxLength = Math.max(...words.map((word) => word.length));
  const result = [];

  for (let column = 0; column < maxLength; column++) {
    let line = "";
    for (const word of words) {
      line += word[column] || " ";
    }
    result.push(line.trimEnd());
  }

  return result;
};
