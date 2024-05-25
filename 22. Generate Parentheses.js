var generateParenthesis = function (n) {
  let solution = [];
  createPar(solution, "", 0, 0, n);
  return solution;
};

const createPar = (solution, s, opened, closed, n) => {
  if (opened === n && closed === n) {
    solution.push(s);
    return;
  }

  if (opened < n) {
    createPar(solution, s + "(", opened + 1, closed, n);
  }

  if (closed < opened) {
    createPar(solution, s + ")", opened, closed + 1, n);
  }
};
