/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var expressiveWords = function (s, words) {
  const group = (str) => {
    const groups = [];
    let i = 0;

    while (i < str.length) {
      let j = i;
      while (j < str.length && str[j] === str[i]) {
        j++;
      }
      groups.push([str[i], j - i]);
      i = j;
    }

    return groups;
  };

  const baseGroups = group(s);
  let count = 0;

  for (const word of words) {
    const wordGroups = group(word);

    if (wordGroups.length !== baseGroups.length) {
      continue;
    }

    let isStretchy = true;
    for (let i = 0; i < baseGroups.length; i++) {
      const [baseChar, baseCount] = baseGroups[i];
      const [wordChar, wordCount] = wordGroups[i];

      if (baseChar !== wordChar) {
        isStretchy = false;
        break;
      }

      if (wordCount > baseCount) {
        isStretchy = false;
        break;
      }

      if (wordCount < baseCount && baseCount < 3) {
        isStretchy = false;
        break;
      }
    }

    if (isStretchy) {
      count++;
    }
  }

  return count;
};
