/**
 * @param {number} num
 * @return {number}
 */
var largestInteger = function (num) {
    const digits = String(num).split("");
    const evens = [];
    const odds = [];

    for (const d of digits) {
        const x = Number(d);
        if (x % 2 === 0) evens.push(x);
        else odds.push(x);
    }

    evens.sort((a, b) => b - a);
    odds.sort((a, b) => b - a);

    let e = 0;
    let o = 0;
    let result = "";

    for (const d of digits) {
        const x = Number(d);
        if (x % 2 === 0) result += evens[e++];
        else result += odds[o++];
    }

    return Number(result);
};