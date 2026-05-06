/**
 * @param {number} n
 * @return {number}
 */
var nextGreaterElement = function (n) {
    const digits = String(n).split('').map(ch => ch.charCodeAt(0) - 48);

    let i = digits.length - 2;
    while (i >= 0 && digits[i] >= digits[i + 1]) i--;
    if (i < 0) return -1;

    let j = digits.length - 1;
    while (digits[j] <= digits[i]) j--;

    [digits[i], digits[j]] = [digits[j], digits[i]];

    for (let l = i + 1, r = digits.length - 1; l < r; l++, r--) {
        [digits[l], digits[r]] = [digits[r], digits[l]];
    }

    const ans = Number(digits.join(''));
    return ans <= 2147483647 ? ans : -1;
};

console.log(nextGreaterElement(12));
console.log(nextGreaterElement(21));