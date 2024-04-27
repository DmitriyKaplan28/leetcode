/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function (words) {
  const palindrome = words.find(
    (word) => word === word.split("").reverse().join("")
  );
  return palindrome ? palindrome : "";
};
