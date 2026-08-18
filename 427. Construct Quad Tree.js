/**
 * // Definition for a QuadTree node.
 * function _Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *    this.val = val;
 *    this.isLeaf = isLeaf;
 *    this.topLeft = topLeft;
 *    this.topRight = topRight;
 *    this.bottomLeft = bottomLeft;
 *    this.bottomRight = bottomRight;
 * };
 */

/**
 * @param {number[][]} grid
 * @return {_Node}
 */
var construct = function(grid) {
    const build = (r, c, size) => {
        let val = grid[r][c];
        let same = true;

        for (let i = r; i < r + size && same; i++) {
            for (let j = c; j < c + size; j++) {
                if (grid[i][j] !== val) {
                    same = false;
                    break;
                }
            }
        }

        if (same) {
            return new Node(val === 1, true, null, null, null, null);
        }

        let half = size / 2;

        return new Node(
            true,
            false,
            build(r, c, half),
            build(r, c + half, half),
            build(r + half, c, half),
            build(r + half, c + half, half)
        );
    };

    return build(0, 0, grid.length);
};
