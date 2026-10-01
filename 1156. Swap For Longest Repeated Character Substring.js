/**
 * @param {string} text
 * @return {number}
 */
var maxRepOpt1 = function (text) {
  const counts = new Map();

  for (const character of text) {
    counts.set(character, (counts.get(character) || 0) + 1);
  }

  let longest = 0;

  for (let index = 0; index < text.length; ) {
    let end = index;
    while (end < text.length && text[end] === text[index]) {
      end++;
    }

    const firstRunLength = end - index;
    longest = Math.max(
      longest,
      Math.min(firstRunLength + 1, counts.get(text[index])),
    );

    if (end + 1 < text.length && text[end + 1] === text[index]) {
      let secondEnd = end + 1;
      while (secondEnd < text.length && text[secondEnd] === text[index]) {
        secondEnd++;
      }

      const combinedLength = firstRunLength + secondEnd - (end + 1) + 1;
      longest = Math.max(
        longest,
        Math.min(combinedLength, counts.get(text[index])),
      );
    }

    index = end;
  }

  return longest;
};
