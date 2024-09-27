/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  return remove(s) === remove(t);
};

const remove = (str) => {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "#") {
      result = result.slice(0, -1);
    } else {
      result += str[i];
    }
  }

  return result;
};

console.log(backspaceCompare("ab##c", "ad#c"));
console.log(backspaceCompare("ab#c", "b"));
