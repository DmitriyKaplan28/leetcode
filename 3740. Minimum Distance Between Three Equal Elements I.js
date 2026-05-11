/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDistance = function (nums) {
    const lastTwo = new Map();
    let best = Infinity;

    for (let i = 0; i < nums.length; i++) {
        const v = nums[i];
        if (!lastTwo.has(v)) {
            lastTwo.set(v, []);
        }

        const arr = lastTwo.get(v);
        arr.push(i);

        if (arr.length >= 3) {
            const first = arr[arr.length - 3];
            best = Math.min(best, 2 * (i - first));
        }

        if (arr.length > 2) {
            arr.shift();
        }
    }

    return best === Infinity ? -1 : best;
};