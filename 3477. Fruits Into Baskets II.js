/**
 * @param {number[]} fruits
 * @param {number[]} baskets
 * @return {number}
 */
var numOfUnplacedFruits = function (fruits, baskets) {
    const n = fruits.length;
    const used = new Array(n).fill(false);
    let placed = 0;

    for (let i = 0; i < n; i++) {
        const f = fruits[i];
        let found = false;
        for (let j = 0; j < n; j++) {
            if (!used[j] && baskets[j] >= f) {
                used[j] = true;
                placed++;
                found = true;
                break;
            }
        }
    }

    return n - placed;
};