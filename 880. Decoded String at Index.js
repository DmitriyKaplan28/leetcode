/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var decodeAtIndex = function (s, k) {
  let decodedLength = 0n;

  for (const character of s) {
    if (Number.isInteger(Number(character))) {
      decodedLength *= BigInt(character);
    } else {
      decodedLength++;
    }
  }

  let position = BigInt(k);

  for (let index = s.length - 1; index >= 0; index--) {
    const character = s[index];

    position %= decodedLength;

    if (position === 0n && character >= "a" && character <= "z") {
      return character;
    }

    if (character >= "a" && character <= "z") {
      decodedLength--;
    } else {
      decodedLength /= BigInt(character);
    }
  }
};
