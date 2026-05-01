/**
 * @param {number} num
 * @return {number}
 */
var splitNum = function (num) {
    const digits = String(num).split('').sort((a, b) => a - b);
    let num1 = '';
    let num2 = '';

    for (let i = 0; i < digits.length; i++) {
        if (i % 2 === 0) {
            num1 += digits[i];
        } else {
            num2 += digits[i];
        }
    }

    return Number(num1 || '0') + Number(num2 || '0');
};