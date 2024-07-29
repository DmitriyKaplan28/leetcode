/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function (s) {
  const checkIfLetter = (el) =>
    (el >= "a" && el <= "z") || (el >= "A" && el <= "Z");
  let res = s.split(""),
    left = 0,
    right = res.length - 1;

  while (left < right) {
    if (!checkIfLetter(res[left])) left++;
    else if (!checkIfLetter(res[right])) right--;
    else {
      [res[left], res[right]] = [res[right], res[left]];
      left++;
      right--;
    }
  }
  return res.join("");
};
