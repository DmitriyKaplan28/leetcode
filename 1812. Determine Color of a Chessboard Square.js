/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function (coordinates) {
  const letter = coordinates[0];
  const number = parseInt(coordinates[1], 10);

  const letterIndex = letter.charCodeAt(0) - "a".charCodeAt(0) + 1;

  return (letterIndex + number) % 2 !== 0;
};
