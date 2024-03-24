/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let addNext = true;
  for (let i = digits.length - 1; i >= 0 && addNext; i--) {
    digits[i] += 1;
    if (digits[i] > 9) {
      digits[i] = 0;
      addNext = true;
    } else {
      addNext = false;
    }
  }

  if (addNext) {
    digits.unshift(1);
  }

  return digits;
};
