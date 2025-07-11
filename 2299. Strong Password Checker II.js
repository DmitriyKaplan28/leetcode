/**
 * @param {string} password
 * @return {boolean}
 */
var strongPasswordCheckerII = function (password) {
  if (password.length < 8) return false;

  if (!/[a-z]/.test(password)) return false;

  if (!/[A-Z]/.test(password)) return false;

  if (!/[0-9]/.test(password)) return false;

  if (!/[!@#$%^&*()\-+]/.test(password)) return false;

  for (let i = 1; i < password.length; i++) {
    if (password[i] === password[i - 1]) return false;
  }

  return true;
};
