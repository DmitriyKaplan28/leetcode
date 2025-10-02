/**
 * @param {string} coordinate1
 * @param {string} coordinate2
 * @return {boolean}
 */
var checkTwoChessboards = function (coordinate1, coordinate2) {
  const col1 = coordinate1.charCodeAt(0) - "a".charCodeAt(0);
  const row1 = parseInt(coordinate1[1]) - 1;

  const col2 = coordinate2.charCodeAt(0) - "a".charCodeAt(0);
  const row2 = parseInt(coordinate2[1]) - 1;

  const parity1 = (col1 + row1) % 2;
  const parity2 = (col2 + row2) % 2;

  return parity1 === parity2;
};
