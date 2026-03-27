/**
 * @param {string} bottom
 * @param {string[]} allowed
 * @return {boolean}
 */
var pyramidTransition = function (bottom, allowed) {
    const map = new Map();
    for (const pat of allowed) {
        const key = pat[0] + pat[1];
        if (!map.has(key)) map.set(key, []);
        map.get(key).push(pat[2]);
    }

    const memo = new Map();

    const canBuild = (row) => {
        if (row.length === 1) return true;
        if (memo.has(row)) return memo.get(row);

        const nextRows = [];

        const dfsNextRow = (i, cur) => {
            if (i === row.length - 1) {
                nextRows.push(cur);
                return;
            }
            const key = row[i] + row[i + 1];
            const tops = map.get(key);
            if (!tops) return;
            for (const ch of tops) {
                dfsNextRow(i + 1, cur + ch);
            }
        };

        dfsNextRow(0, "");

        for (const nr of nextRows) {
            if (canBuild(nr)) {
                memo.set(row, true);
                return true;
            }
        }
        memo.set(row, false);
        return false;
    };

    return canBuild(bottom);
};

console.log(pyramidTransition("BCD", ["BCC", "CDE", "CEA", "FFF"]));
console.log(pyramidTransition("AAAA", ["AAB", "AAC", "BCD", "BBE", "DEF"]));