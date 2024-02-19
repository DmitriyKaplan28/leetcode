/**
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */
Array.prototype.snail = function (rowsCount, colsCount) {
    if (this.length !== rowsCount * colsCount) return []
    let resArr = Array(rowsCount).fill([]).map(() => []);
    for (let i = 0; i < this.length; i++) {
        const j = Math.floor(i / rowsCount);
        if (j % 2 === 0) {
            resArr[i % rowsCount][j] = this[i]
        } else {
            resArr[rowsCount - i % rowsCount - 1][j] = this[i]
        }
    }
    return resArr
}

/**
 * const arr = [1,2,3,4];
 * arr.snail(1,4); // [[1,2,3,4]]
 */