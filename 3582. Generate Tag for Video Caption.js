/**
 * @param {string} caption
 * @return {string}
 */
var generateTag = function (caption) {
  const words = caption.split(/\s+/).filter((word) => word.length > 0);

  if (words.length === 0) return "#";

  let camelCase = words[0].toLowerCase();

  for (let i = 1; i < words.length; i++) {
    const word = words[i];
    if (word.length > 0) {
      camelCase += word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }
  }

  const lettersOnly = camelCase.replace(/[^a-zA-Z]/g, "");

  let result = "#" + lettersOnly;

  if (result.length > 100) {
    result = result.substring(0, 100);
  }

  return result;
};
