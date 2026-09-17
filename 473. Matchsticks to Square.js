/**
 * @param {number[]} matchsticks
 * @return {boolean}
 */
var makesquare = function(matchsticks) {
    const sum = matchsticks.reduce((a, b) => a + b, 0);
    if (sum % 4 !== 0 || matchsticks.length < 4) return false;

    const side = sum / 4;
    matchsticks.sort((a, b) => b - a);

    if (matchsticks[0] > side) return false;

    const sides = [0, 0, 0, 0];

    function backtrack(i) {
        if (i === matchsticks.length) return true;

        const stick = matchsticks[i];
        const seen = new Set();

        for (let j = 0; j < 4; j++) {
            if (seen.has(sides[j])) continue;
            seen.add(sides[j]);

            if (sides[j] + stick > side) continue;

            sides[j] += stick;

            if (backtrack(i + 1)) return true;

            sides[j] -= stick;
        }

        return false;
    }

    return backtrack(0);  
};
