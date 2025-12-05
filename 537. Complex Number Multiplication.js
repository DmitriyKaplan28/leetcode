/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var complexNumberMultiply = function (num1, num2) {
  const parse = (s) => {
    const [real, imagPart] = s.split("+");
    const imag = imagPart.slice(0, -1);
    return [Number(real), Number(imag)];
  };

  const [a, b] = parse(num1);
  const [c, d] = parse(num2);

  const real = a * c - b * d;
  const imag = a * d + b * c;

  return `${real}+${imag}i`;
};
console.log(complexNumberMultiply("1+1i", "1+1i"));
console.log(complexNumberMultiply("1+-1i", "1+-1i"));
