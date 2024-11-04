/**
 * @param {string} text
 * @return {string}
 */
var reorderSpaces = function (text) {
  const spaceCount = (text.match(/ /g) || []).length;

  const words = text.trim().split(/\s+/);
  const wordCount = words.length;

  if (wordCount === 1) {
    return words[0] + " ".repeat(spaceCount);
  }

  const spacesBetween = Math.floor(spaceCount / (wordCount - 1));
  const extraSpaces = spaceCount % (wordCount - 1);

  return words.join(" ".repeat(spacesBetween)) + " ".repeat(extraSpaces);
};
