/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function (s) {
  const stack = [];
  let current = "";

  for (const ch of s) {
    if (ch === "(") {
      stack.push(current);
      current = "";
    } else if (ch === ")") {
      const previous = stack.pop();
      current = previous + current.split("").reverse().join("");
    } else {
      current += ch;
    }
  }

  return current;
};
