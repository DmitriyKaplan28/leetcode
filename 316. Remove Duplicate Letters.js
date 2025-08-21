/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function (s) {
  if (s.length <= 1) return s;

  const lastIndex = new Map();
  for (let i = 0; i < s.length; i++) {
    lastIndex.set(s[i], i);
  }

  const stack = [];
  const inStack = new Set();

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (inStack.has(ch)) continue;

    while (
      stack.length > 0 &&
      stack[stack.length - 1] > ch &&
      lastIndex.get(stack[stack.length - 1]) > i
    ) {
      inStack.delete(stack.pop());
    }

    stack.push(ch);
    inStack.add(ch);
  }

  return stack.join("");
};

console.log(removeDuplicateLetters("bcabc"));
console.log(removeDuplicateLetters("cbacdcbc"));
