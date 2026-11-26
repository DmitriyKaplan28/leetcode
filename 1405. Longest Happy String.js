/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */
var longestDiverseString = function (a, b, c) {
  const counts = [
    { char: "a", remaining: a },
    { char: "b", remaining: b },
    { char: "c", remaining: c },
  ];
  const result = [];

  while (true) {
    counts.sort((left, right) => right.remaining - left.remaining);

    let selected = null;
    for (const item of counts) {
      if (
        item.remaining > 0 &&
        (result.length < 2 ||
          result[result.length - 1] !== item.char ||
          result[result.length - 2] !== item.char)
      ) {
        selected = item;
        break;
      }
    }

    if (!selected) break;

    result.push(selected.char);
    selected.remaining -= 1;
  }

  return result.join("");
};
