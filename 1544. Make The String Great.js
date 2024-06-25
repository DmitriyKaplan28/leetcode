/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function (s) {
  let stack = [];
  for (let letter of s) {
    stack.push(letter);
    while (
      stack.length >= 2 &&
      isNotGood(stack[stack.length - 2], stack[stack.length - 1])
    ) {
      stack.pop();
      stack.pop();
    }
  }
  return stack.join("");
};

function isNotGood(letter, nextLetter) {
  return Math.abs(letter.charCodeAt() - nextLetter.charCodeAt()) === 32;
}
