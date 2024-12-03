/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function (secret, guess) {
  let countA = 0;
  let countB = 0;
  const secretMap = new Map();
  const guessMap = new Map();

  for (let i = 0; i < secret.length; i++) {
    if (secret[i] === guess[i]) {
      countA++;
    } else {
      secretMap.set(secret[i], (secretMap.get(secret[i]) || 0) + 1);
      guessMap.set(guess[i], (guessMap.get(guess[i]) || 0) + 1);
    }
  }

  for (const [digit, count] of guessMap.entries()) {
    if (secretMap.has(digit)) {
      countB += Math.min(count, secretMap.get(digit));
    }
  }

  return `${countA}A${countB}B`;
};

console.log(getHint("1807", "7801"));
console.log(getHint("1123", "0111"));
