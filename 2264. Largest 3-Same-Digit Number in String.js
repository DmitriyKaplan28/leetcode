/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(num) {
    let maxGoodInteger = "";

    for (let i = 0; i < num.length - 2; i++) {
        if (num[i] === num[i + 1] && num[i] === num[i + 2]) {
            const goodInteger = num.substring(i, i + 3);

            if (goodInteger > maxGoodInteger) {
                maxGoodInteger = goodInteger;
            }
        }
    }

    return maxGoodInteger;
};

console.log(largestGoodInteger("6777133339"));
console.log(largestGoodInteger("2300019"));
console.log(largestGoodInteger("42352338"));
