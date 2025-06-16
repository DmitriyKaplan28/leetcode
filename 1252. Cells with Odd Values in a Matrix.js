/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function(m, n, indices) {
   const rowIncrements = new Array(m).fill(0);
    const colIncrements = new Array(n).fill(0);

    for (const [ri, ci] of indices) {
        rowIncrements[ri]++;
        colIncrements[ci]++;
    }

    let oddCount = 0;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            const cellValue = rowIncrements[i] + colIncrements[j];
            if (cellValue % 2 !== 0) {
                oddCount++;
            }
        }
    }

    return oddCount; 
};
