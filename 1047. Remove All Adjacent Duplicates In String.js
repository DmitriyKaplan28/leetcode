/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
  let res = [];
  for (const letter of s) {
    if (res[res.length - 1] === letter) {
      res.pop();
    } else {
      res.push(letter);
    }
  }
  return res.join("");
};

console.log(removeDuplicates("abbaca"))
