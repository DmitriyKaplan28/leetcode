/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
  const originalColor = image[sr][sc];
  if (originalColor === color) return image; 

  function dfs(x, y) {
    if (
      x < 0 ||
      y < 0 ||
      x >= image.length ||
      y >= image[0].length ||
      image[x][y] !== originalColor
    ) {
      return;
    }

    image[x][y] = color;

    dfs(x + 1, y);
    dfs(x - 1, y);
    dfs(x, y + 1);
    dfs(x, y - 1);
  }

  dfs(sr, sc);
  return image;
};
