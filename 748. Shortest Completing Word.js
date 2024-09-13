/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function (licensePlate, words) {
  let res = "";

  let letters = licensePlate.replace(/[^a-z]/gi, "").toLowerCase();

  for (let i = 0; i < words.length; i++) {
    let temp = words[i];
    for (let j = 0; j < letters.length; j++) {
      let currRegExp = new RegExp(`${letters[j]}`);
      temp = temp.replace(currRegExp, "");
    }
    if (words[i].length - letters.length !== temp.length) continue;
    if (res.length === 0) res = words[i];
    if (words[i].length < res.length) res = words[i];
  }

  return res;
};
