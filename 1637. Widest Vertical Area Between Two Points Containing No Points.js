/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function(points) {
   const xCoords = points.map(point => point[0]).sort((a, b) => a - b);
    let maxWidth = 0;
    for (let i = 1; i < xCoords.length; i++) {
        const width = xCoords[i] - xCoords[i - 1];
        maxWidth = Math.max(maxWidth, width);
    }
    return maxWidth; 
};
