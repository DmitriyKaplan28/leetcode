/**
 * @param {number[]} capacity
 * @param {number} itemSize
 * @return {number}
 */
var minimumIndex = function (capacity, itemSize) {
    let bestIdx = -1;
    let bestCap = Infinity;
    for (let i = 0; i < capacity.length; i++) {
        if (capacity[i] >= itemSize && capacity[i] < bestCap) {
            bestCap = capacity[i];
            bestIdx = i;
        }
    }
    return bestIdx;
};