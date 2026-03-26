/**
 * @param {number} red
 * @param {number} blue
 * @return {number}
 */
var maxHeightOfTriangle = function (red, blue) {
    const total = red + blue;

    const can = (h) => {
        const m = Math.floor(h / 2);

        const oddSum = (h % 2 === 0) ? m * m : (m + 1) * (m + 1);
        const evenSum = m * (m + 1);

        return (oddSum <= red && evenSum <= blue) || (oddSum <= blue && evenSum <= red);
    };

    let hi = Math.floor((Math.sqrt(1 + 8 * total) - 1) / 2) + 1;
    if (hi < 0) hi = 0;

    let lo = 0;
    while (lo < hi) {
        const mid = Math.floor((lo + hi + 1) / 2);
        if (can(mid)) lo = mid;
        else hi = mid - 1;
    }

    return lo;
};

console.log(maxHeightOfTriangle(2, 4));
console.log(maxHeightOfTriangle(2, 1));
console.log(maxHeightOfTriangle(1, 1));
console.log(maxHeightOfTriangle(10, 1));