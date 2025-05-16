/**
 * @param {string} word
 * @return {number}
 */
var numDifferentIntegers = function (word) {
  const replaced = word.replace(/[^0-9]/g, " ");

  const numbers = replaced.split(" ").filter((num) => num.length > 0);

  const uniqueNumbers = new Set(
    numbers.map((num) => {
      return BigInt(num).toString();
    })
  );

  return uniqueNumbers.size;
};
