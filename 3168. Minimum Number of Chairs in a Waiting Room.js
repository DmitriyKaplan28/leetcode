/**
 * @param {string} s
 * @return {number}
 */
var minimumChairs = function(s) {
    let count = 0;
    let chairs = 0;

    for (let char of s) {
        if (char === "E") {
            count += 1;
        } else {
            count -= 1;
        }
        chairs = Math.max(chairs, count);
    }
    return chairs;
};
