/**
 * @param {number[][]} drones
 * @param {number[]} target
 * @return {number}
 */
var nearestDrone = function(drones, target) {
    let bestIndex = -1;
    let minDistance = Infinity;

    for (let i = 0; i < drones.length; i++) {
        const [x, y, range] = drones[i];
        const distance = Math.abs(x - target[0]) + Math.abs(y - target[1]);

        if (distance <= range && distance < minDistance) {
            minDistance = distance;
            bestIndex = i;
        }
    }

    return bestIndex;
};
