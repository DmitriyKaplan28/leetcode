/**
 * @param {number[]} landStartTime
 * @param {number[]} landDuration
 * @param {number[]} waterStartTime
 * @param {number[]} waterDuration
 * @return {number}
 */
var earliestFinishTime = function (landStartTime, landDuration, waterStartTime, waterDuration) {
    let ans = Infinity;
    for (let i = 0; i < landStartTime.length; i++) {
        const landEnd = landStartTime[i] + landDuration[i];
        for (let j = 0; j < waterStartTime.length; j++) {
            const waterEnd = waterStartTime[j] + waterDuration[j];
            const finishLandFirst = Math.max(waterStartTime[j], landEnd) + waterDuration[j];
            const finishWaterFirst = Math.max(landStartTime[i], waterEnd) + landDuration[i];
            ans = Math.min(ans, finishLandFirst, finishWaterFirst);
        }
    }
    return ans;
};