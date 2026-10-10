/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var findRadius = function(houses, heaters) {
    houses.sort((a, b) => a - b);
    heaters.sort((a, b) => a - b);

    let radius = 0;

    for (const house of houses) {
        let left = 0;
        let right = heaters.length - 1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);

            if (heaters[mid] < house) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        const rightDist = left < heaters.length ? heaters[left] - house : Infinity;
        const leftDist = right > -1 ? house - heaters[right] : Infinity;

        radius = Math.max(radius, Math.min(leftDist, rightDist));
    }

    return radius;
};
