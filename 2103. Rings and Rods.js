/**
 * @param {string} rings
 * @return {number}
 */
var countPoints = function (rings) {
  let colorArr = Array(10);

  for (let i = 0; i < 10; i++) {
    colorArr[i] = {};
  }

  for (let i = 0; i < rings.length; i += 2) {
    let color = rings[i],
      idx = rings[i + 1];
    colorArr[idx][color] = true;
  }

  let res = 0;
  for (let i = 0; i < 10; i++) {
    if (colorArr[i]["R"] && colorArr[i]["G"] && colorArr[i]["B"]) res++;
  }
  return res;
};
