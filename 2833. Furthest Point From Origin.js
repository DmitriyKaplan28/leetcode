/**
 * @param {string} moves
 * @return {number}
 */
var furthestDistanceFromOrigin = function (moves) {
    let left = 0, right = 0, underscores = 0;

    for (let move of moves) {
        if (move === 'L') left++;
        else if (move === 'R') right++;
        else underscores++;
    }

    return Math.abs(left - right) + underscores;
};

console.log(furthestDistanceFromOrigin("L_RL__R"));
console.log(furthestDistanceFromOrigin("_R__LL_"));
console.log(furthestDistanceFromOrigin("_______"));
