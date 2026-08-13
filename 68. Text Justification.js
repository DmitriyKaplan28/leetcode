/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {
  const res = [];
  let i = 0;
  const n = words.length;

  while (i < n) {
    let lineLen = words[i].length;
    let j = i + 1;
    while (j < n && lineLen + 1 + words[j].length <= maxWidth) {
      lineLen += 1 + words[j].length;
      j++;
    }

    const isLast = j === n;
    const numWords = j - i;
    let line = "";

    if (numWords === 1 || isLast) {
     
      line = words.slice(i, j).join(" ");
      line += " ".repeat(maxWidth - line.length);
    } else {
      const totalChars = words.slice(i, j).reduce((s, w) => s + w.length, 0);
      const totalSpaces = maxWidth - totalChars;
      const slots = numWords - 1;
      const spaceEach = Math.floor(totalSpaces / slots);
      let extra = totalSpaces % slots;

      for (let k = i; k < j; k++) {
        line += words[k];
        if (k < j - 1) {
          let spaces = spaceEach + (extra > 0 ? 1 : 0);
          extra--;
          line += " ".repeat(spaces);
        }
      }
    }

    res.push(line);
    i = j;
  }

  return res;
};

console.log(
  fullJustify(
    ["This", "is", "an", "example", "of", "text", "justification."],
    16,
  ).join("\n"),
);
console.log("---");
console.log(
  fullJustify(["What", "must", "be", "acknowledgment", "shall", "be"], 16).join(
    "\n",
  ),
);
console.log("---");
console.log(
  fullJustify(
    [
      "Science",
      "is",
      "what",
      "we",
      "understand",
      "well",
      "enough",
      "to",
      "explain",
      "to",
      "a",
      "computer.",
      "Art",
      "is",
      "everything",
      "else",
      "we",
      "do",
    ],
    20,
  ).join("\n"),
);
