/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function (key, message) {
  const decoder = new Map();
  for (const c of key) {
    if (c === " " || decoder.has(c)) {
      continue;
    }
    decoder.set(c, String.fromCharCode(decoder.size + 97));
  }
  decoder.set(" ", " ");

  return message
    .split("")
    .map((c) => decoder.get(c))
    .join("");
};
