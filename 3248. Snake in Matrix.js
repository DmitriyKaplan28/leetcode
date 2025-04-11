/**
 * @param {number} n
 * @param {string[]} commands
 * @return {number}
 */
var finalPositionOfSnake = function(n, commands) {
    let rowsCount = 0;
    let colsCount = 0;
   commands.forEach(command => {
    switch(command) {
        case "RIGHT":
            colsCount++;
            break;
        case "LEFT":
            colsCount--;
            break
        case "UP":
            rowsCount--;
            break
        case "DOWN":
            rowsCount++;
            break;
    }
   })
   return colsCount + n * rowsCount;
};
console.log(finalPositionOfSnake(2, ["RIGHT", "DOWN"]));
console.log(finalPositionOfSnake(3, ["RIGHT", "DOWN", "UP"]));
