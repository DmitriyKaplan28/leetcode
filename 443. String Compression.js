/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  let writeIndex = 0;
  let readIndex = 0;

  while (readIndex < chars.length) {
    const currentChar = chars[readIndex];
    let count = 0;

    while (readIndex < chars.length && chars[readIndex] === currentChar) {
      count++;
      readIndex++;
    }

    chars[writeIndex++] = currentChar;

    if (count > 1) {
      const countStr = count.toString();
      for (let i = 0; i < countStr.length; i++) {
        chars[writeIndex++] = countStr[i];
      }
    }
  }

  return writeIndex;
};

console.log(compress(["a", "a", "b", "b", "c", "c", "c"]));
console.log(compress(["a"]));
console.log(compress(["a","b","b","b","b","b","b","b","b","b","b","b","b"]));