/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
    const m = mat.length;
    const n = mat[0].length;
    const queue = [];
    const dist = Array.from({ length: m }, () => Array(n).fill(-1));

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (mat[i][j] === 0) {
                dist[i][j] = 0;
                queue.push([i, j]);
            }
        }
    }

    const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    let head = 0;

    while (head < queue.length) {
        const [i, j] = queue[head++];

        for (const [di, dj] of dirs) {
            const x = i + di;
            const y = j + dj;

            if (
                x >= 0 && x < m &&
                y >= 0 && y < n &&
                dist[x][y] === -1
            ) {
                dist[x][y] = dist[i][j] + 1;
                queue.push([x, y]);
            }
        }
    }

    return dist;  
};
