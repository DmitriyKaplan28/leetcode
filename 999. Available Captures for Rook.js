/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function(board) {
    let rookRow, rookCol;

    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if (board[i][j] === 'R') {
                rookRow = i;
                rookCol = j;
                break;
            }
        }
    }

    let captures = 0;
    
    for (let i = rookRow - 1; i >= 0; i--) {
        if (board[i][rookCol] === 'B') break; // Blocked by bishop
        if (board[i][rookCol] === 'p') {
            captures++;
            break;
        }
    }

    for (let i = rookRow + 1; i < 8; i++) {
        if (board[i][rookCol] === 'B') break;
        if (board[i][rookCol] === 'p') {
            captures++;
            break;
        }
    }

    for (let j = rookCol - 1; j >= 0; j--) {
        if (board[rookRow][j] === 'B') break;
        if (board[rookRow][j] === 'p') {
            captures++;
            break;
        }
    }

    for (let j = rookCol + 1; j < 8; j++) {
        if (board[rookRow][j] === 'B') break;
        if (board[rookRow][j] === 'p') {
            captures++;
            break;
        }
    }

    return captures;
}

// Example usage
const board = [
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", "p", ".", ".", ".", "."],
    [".", ".", ".", "R", ".", ".", ".", "p"],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", "B", ".", ".", ".", "."],
    [".", ".", ".", "p", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."]
];

console.log(numRookCaptures(board)); // Output: 3
