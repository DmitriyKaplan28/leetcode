/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
  let count = 0;
  for (let i of words) {
    let consistant = true;

    for (let j of i) {
      if (!allowed.includes(j)) {
        consistant = false;
        break;
      }
    }

    if (consistant) {
      count++;
    }
  }

  return count;
};
