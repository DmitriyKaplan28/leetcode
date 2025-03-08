/**
 * @param {string} s
 * @return {number}
 */
var minLength = function (s) {
  let stack = [];

  for (let char of s) {
    stack.push(char);
    while (
      stack.length >= 2 &&
      ((stack[stack.length - 2] === "A" && stack[stack.length - 1] === "B") ||
        (stack[stack.length - 2] === "C" && stack[stack.length - 1] === "D"))
    ) {
      stack.pop();
      stack.pop();
    }
  }

  return stack.length;
};
