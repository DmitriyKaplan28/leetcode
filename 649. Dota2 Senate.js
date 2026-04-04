/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function (senate) {
    const r = [];
    const d = [];
    const n = senate.length;
    for (let i = 0; i < n; i++) {
        if (senate[i] === "R") r.push(i);
        else d.push(i);
    }
    while (r.length && d.length) {
        const ri = r.shift();
        const di = d.shift();
        if (ri < di) r.push(ri + n);
        else d.push(di + n);
    }
    return r.length ? "Radiant" : "Dire";
};

console.log(predictPartyVictory("RD"));
console.log(predictPartyVictory("RDD"));