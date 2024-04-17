/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const onlyLetters = s.replace(/[^\w\s]|_/g, "").replaceAll(' ', '').toLowerCase()
    return onlyLetters.split('').reverse('').join('') === onlyLetters
};