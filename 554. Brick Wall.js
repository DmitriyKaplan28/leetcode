/**
 * @param {number[][]} wall
 * @return {number}
 */
var leastBricks = function(wall) {
    const edges = new Map();
    let maxEdges = 0;

    for (const row of wall) {
        let position = 0;

        for (let i = 0; i < row.length - 1; i++) {
            position += row[i];
            edges.set(position, (edges.get(position) || 0) + 1);
            maxEdges = Math.max(maxEdges, edges.get(position));
        }
    }

    return wall.length - maxEdges;
};
