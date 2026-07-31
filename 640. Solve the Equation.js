/**
 * @param {string} equation
 * @return {string}
 */
var solveEquation = function (equation) {
  const [left, right] = equation.split("=");

  const parseSide = (side) => {
    let coefficient = 0;
    let constant = 0;
    let sign = 1;
    let i = 0;

    while (i < side.length) {
      const char = side[i];

      if (char === "+" || char === "-") {
        sign = char === "+" ? 1 : -1;
        i++;
        continue;
      }

      let j = i;
      while (j < side.length && side[j] !== "+" && side[j] !== "-") {
        j++;
      }

      const token = side.slice(i, j);

      if (token === "x") {
        coefficient += sign;
      } else if (token.endsWith("x")) {
        const value = token.slice(0, -1);
        const num = value === "" ? 1 : Number(value);
        coefficient += sign * num;
      } else {
        constant += sign * Number(token);
      }

      i = j;
    }

    return { coefficient, constant };
  };

  const leftData = parseSide(left);
  const rightData = parseSide(right);

  const coefficient = leftData.coefficient - rightData.coefficient;
  const constant = leftData.constant - rightData.constant;

  if (coefficient === 0) {
    return constant === 0 ? "Infinite solutions" : "No solution";
  }

  return `x=${-constant / coefficient}`;
};
