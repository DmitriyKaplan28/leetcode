/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {
    if (arr.length < 3) return false;
    
    let i = 0;
    let n = arr.length;
    
    while (i + 1 < n && arr[i] < arr[i + 1]) {
        i++;
    }
    
    if (i === 0 || i === n - 1) return false;
    
    while (i + 1 < n && arr[i] > arr[i + 1]) {
        i++;
    }
    
    return i === n - 1;
};

console.log(validMountainArray([2, 1]));
console.log(validMountainArray([3, 5, 5]));
console.log(validMountainArray([0, 3, 2, 1]));
console.log(validMountainArray([1,1,1,1,1,1,1,2,1]));
