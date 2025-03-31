/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    let n = arr.length;
    let maxRight = -1; 

    for (let i = n - 1; i >= 0; i--) {
        let current = arr[i]; 
        arr[i] = maxRight;    
        maxRight = Math.max(maxRight, current); 
    }

    return arr;
};
