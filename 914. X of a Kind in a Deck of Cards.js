/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
  if (deck.length < 2) return false;

    let countMap = new Map();
    for (let num of deck) {
        countMap.set(num, (countMap.get(num) || 0) + 1);
    }

    let counts = Array.from(countMap.values());
    let gcd = counts[0];

    function findGCD(a, b) {
        return b === 0 ? a : findGCD(b, a % b);
    }

    for (let count of counts) {
        gcd = findGCD(gcd, count);
        if (gcd === 1) return false; 
    }

    return gcd > 1; 
};
