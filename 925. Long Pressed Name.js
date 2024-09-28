/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function (name, typed) {
  let i = 0;
  let j = 0;
  let temp = "";
  while (i < name.length || j < typed.length) {
    if (typed[j] === name[i]) {
      temp = name[i];
      i++;
    } else if (!(typed[j] === typed[j - 1] && typed[j] === temp)) {
      return false;
    }
    j++;
  }
  return true;
};
