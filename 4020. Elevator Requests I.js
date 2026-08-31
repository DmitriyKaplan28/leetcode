/**
 * @param {number} n
 * @param {number[]} requests
 * @return {number}
 */
var elevatorRequests = function(n, requests) {
    let current = 0;
    let time = 0;

    for (const floor of requests) {
        time += Math.abs(floor - current);
        current = floor;
    }

    return time;
};
