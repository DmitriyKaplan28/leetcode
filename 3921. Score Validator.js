/**
 * @param {string[]} events
 * @return {number[]}
 */
var scoreValidator = function (events) {
    let score = 0;
    let counter = 0;
    for (const e of events) {
        if (e === "W") counter++;
        else if (e === "WD" || e === "NB") score++;
        else score += Number(e);
        if (counter === 10) break;
    }
    return [score, counter];
};