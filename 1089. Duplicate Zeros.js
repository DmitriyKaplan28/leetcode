/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    let n = arr.length;
    let countZeros = 0;

    for (let i = 0; i < n; i++) {
        if (arr[i] === 0) countZeros++;
    }
    let i = n - 1;
    let j = n + countZeros - 1;

    while (i >= 0) {
        if (j < n) arr[j] = arr[i];
        j--;
        if (arr[i] === 0) { 
            if (j < n) arr[j] = 0;
            j--;
        }
        i--;
    }
};
