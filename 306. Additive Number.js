/**
 * @param {string} num
 * @return {boolean}
 */
var isAdditiveNumber = function(num) {
    const n = num.length;
    const isValid = (num1, num2, start) => {
        if (start === n) return true;

        let sum = (BigInt(num1) + BigInt(num2)).toString();
        if (num.startsWith(sum, start)) {
            return isValid(num2, sum, start + sum.length);
        } else {
            return false;
        }
    };

    for (let i = 1; i <= Math.floor(n / 2); i++) {
        if (num[0] === '0' && i > 1) break;  

        for (let j = i + 1; n - j >= j - i; j++) {
            if (num[i] === '0' && j - i > 1) break;  

            let num1 = num.slice(0, i);
            let num2 = num.slice(i, j);
            if (isValid(num1, num2, j)) {
                return true;
            }
        }
    }
    
    return false;
};