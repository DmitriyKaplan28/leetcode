/**
 * @param {number} n
 * @param {number[][]} pick
 * @return {number}
 */
var winningPlayerCount = function (n, pick) {
    const counts = Array.from({ length: n }, () => new Map());

    for (const [x, y] of pick) {
        const m = counts[x];
        m.set(y, (m.get(y) || 0) + 1);
    }

    let winners = 0;
    for (let i = 0; i < n; i++) {
        const m = counts[i];
        for (const c of m.values()) {
            if (c > i) {
                winners++;
                break;
            }
        }
    }

    return winners;
};