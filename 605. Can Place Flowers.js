/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let maxNewFlowers = 0
    for (let i=0; i< flowerbed.length; i++) {
        if (!flowerbed[i] && !flowerbed[i-1]  && !flowerbed[i+1]) {
            flowerbed[i] = 1;
            maxNewFlowers++;
        }
    }
    return n <= maxNewFlowers
};