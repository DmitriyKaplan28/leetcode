/**
 * @param {number} n
 * @return {number}
 */
var getLeastFrequentDigit = function (n) {
    const counts = new Array(10).fill(0);

    for (const ch of String(n)) {
        counts[ch.charCodeAt(0) - 48]++;
    }

    let answer = 0;
    let minFreq = Infinity;

    for (let digit = 0; digit <= 9; digit++) {
        if (counts[digit] > 0 && counts[digit] < minFreq) {
            minFreq = counts[digit];
            answer = digit;
        }
    }

    return answer;
};