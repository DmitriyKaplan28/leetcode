/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function (s, k) {
  const stack = [];

  for (const letter of s) {
    const top = stack[stack.length - 1];
    if (top && top[0] === letter) {
      top[1] += 1;
      if (top[1] === k) {
        stack.pop();
      }
    } else {
      stack.push([letter, 1]);
    }
  }

  return stack.map(([letter, count]) => letter.repeat(count)).join("");
};
