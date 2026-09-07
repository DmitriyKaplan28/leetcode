/**
 * @param {string} s
 * @return {string}
 */
var smallestSubsequence = function (s) {
  const remaining = new Map();
  for (const character of s) {
    remaining.set(character, (remaining.get(character) || 0) + 1);
  }

  const stack = [];
  const included = new Set();

  for (const character of s) {
    remaining.set(character, remaining.get(character) - 1);

    if (included.has(character)) {
      continue;
    }

    while (
      stack.length > 0 &&
      stack[stack.length - 1] > character &&
      remaining.get(stack[stack.length - 1]) > 0
    ) {
      included.delete(stack.pop());
    }

    stack.push(character);
    included.add(character);
  }

  return stack.join("");
};
