/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {
  let prev = new Map();

  for (let i = 0; i < words[0].length; i++) {
    prev.set(words[0][i], (prev.get(words[0][i]) || 0) + 1);
  }

  for (let i = 1; i < words.length; i++) {
    let current = new Map();
    let currS = words[i];

    for (let j = 0; j < currS.length; j++) {
      if (prev.has(currS[j])) {
        current.set(currS[j], (current.get(currS[j]) || 0) + 1);
        prev.get(currS[j]) > 1
          ? prev.set(currS[j], prev.get(currS[j]) - 1)
          : prev.delete(currS[j]);
      }
    }
    prev = current;
  }

  let res = [];

  prev.forEach((val, key) => {
    while (val > 0) {
      res.push(key);
      val--;
    }
  });
  return res;
};
