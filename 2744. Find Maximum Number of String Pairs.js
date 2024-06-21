var maximumNumberOfStringPairs = function (words) {
  let count = {},
    pairs = 0;
  for (let word of words) {
    let reversed = word.split("").reverse().join("");
    pairs += count[reversed] || 0;
    count[word] = (count[word] || 0) + 1;
  }
  return pairs;
};