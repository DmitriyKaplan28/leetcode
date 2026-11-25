/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var constructArray = function(n, k) {
    const answer = [];

    let left = 1;
    let right = k + 1;

    while (left <= right) {
        answer.push(left++);
        if (left <= right) {
            answer.push(right--);
        }
    }

    for (let i = k + 2; i <= n; i++) {
        answer.push(i);
    }

    return answer; 
};
