/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
  const characters = s.split("");
  const openParentheses = [];

  for (let i = 0; i < characters.length; i++) {
    if (characters[i] === "(") {
      openParentheses.push(i);
    } else if (characters[i] === ")") {
      if (openParentheses.length === 0) {
        characters[i] = "";
      } else {
        openParentheses.pop();
      }
    }
  }

  for (const index of openParentheses) {
    characters[index] = "";
  }

  return characters.join("");
};
