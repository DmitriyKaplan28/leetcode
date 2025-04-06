/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
    let n = arr.length;
    let check = [arr[Math.floor(n / 4)], arr[Math.floor(n / 2)], arr[Math.floor(3 * n / 4)]];

    for (let num of check) {
        let first = arr.indexOf(num);
        let last = arr.lastIndexOf(num);
        if (last - first + 1 > n / 4) {
            return num;
        }
    }

    return -1;  
};
