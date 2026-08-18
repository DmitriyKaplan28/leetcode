/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    points.sort((a, b) => a[1] - b[1]);

    let arrows = 0;
    let arrowX = -Infinity;

    for (const [start, end] of points) {
        if (start > arrowX) {
            arrows++;
            arrowX = end;
        }
    }

    return arrows;
};
