/**
 * @param {string} dominoes
 * @return {string}
 */
var pushDominoes = function (dominoes) {
    const n = dominoes.length;
    const result = dominoes.split('');

    const leftR = new Array(n).fill(Infinity);
    let lastR = -1;
    for (let i = 0; i < n; i++) {
        if (dominoes[i] === 'R') {
            lastR = i;
            leftR[i] = 0;
        } else if (dominoes[i] === 'L') {
            lastR = -1;
        } else if (lastR !== -1) {
            leftR[i] = i - lastR;
        }
    }

    const rightL = new Array(n).fill(Infinity);
    let lastL = -1;
    for (let i = n - 1; i >= 0; i--) {
        if (dominoes[i] === 'L') {
            lastL = i;
            rightL[i] = 0;
        } else if (dominoes[i] === 'R') {
            lastL = -1;
        } else if (lastL !== -1) {
            rightL[i] = lastL - i;
        }
    }

    for (let i = 0; i < n; i++) {
        if (dominoes[i] !== '.') {
            result[i] = dominoes[i];
        } else if (leftR[i] === rightL[i]) {
            result[i] = '.';
        } else if (leftR[i] < rightL[i]) {
            result[i] = 'R';
        } else {
            result[i] = 'L';
        }
    }

    return result.join('');
};

console.log(pushDominoes("RR.L"));
console.log(pushDominoes(".L.R...LR..L.."));