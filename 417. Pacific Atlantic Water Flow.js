/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
  if (!heights || !heights.length) return [];

  const rows = heights.length;
  const cols = heights[0].length;
  const pacific = Array.from({ length: rows }, () => Array(cols).fill(false));
  const atlantic = Array.from({ length: rows }, () => Array(cols).fill(false));
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  const bfs = (queue, visited) => {
    while (queue.length) {
      const [row, col] = queue.shift();

      for (const [dr, dc] of directions) {
        const nextRow = row + dr;
        const nextCol = col + dc;

        if (
          nextRow < 0 ||
          nextRow >= rows ||
          nextCol < 0 ||
          nextCol >= cols ||
          visited[nextRow][nextCol] ||
          heights[nextRow][nextCol] < heights[row][col]
        ) {
          continue;
        }

        visited[nextRow][nextCol] = true;
        queue.push([nextRow, nextCol]);
      }
    }
  };

  const pacificQueue = [];
  const atlanticQueue = [];

  for (let r = 0; r < rows; r += 1) {
    pacific[r][0] = true;
    pacificQueue.push([r, 0]);

    atlantic[r][cols - 1] = true;
    atlanticQueue.push([r, cols - 1]);
  }

  for (let c = 0; c < cols; c += 1) {
    pacific[0][c] = true;
    pacificQueue.push([0, c]);

    atlantic[rows - 1][c] = true;
    atlanticQueue.push([rows - 1, c]);
  }

  bfs(pacificQueue, pacific);
  bfs(atlanticQueue, atlantic);

  const result = [];
  for (let r = 0; r < rows; r += 1) {
    for (let c = 0; c < cols; c += 1) {
      if (pacific[r][c] && atlantic[r][c]) {
        result.push([r, c]);
      }
    }
  }

  return result;
};

console.log(
  pacificAtlantic([
    [1, 2, 2, 3, 5],
    [3, 2, 3, 4, 4],
    [2, 4, 5, 3, 1],
    [6, 7, 1, 4, 5],
    [5, 1, 1, 2, 4],
  ]),
);
console.log(pacificAtlantic([[1]]));
