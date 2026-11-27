/**
 * @param {string[]} votes
 * @return {string}
 */
var rankTeams = function (votes) {
  if (votes.length === 0) return "";

  const rankCounts = new Map();

  for (const team of votes[0]) {
    rankCounts.set(team, Array(votes[0].length).fill(0));
  }

  for (const vote of votes) {
    for (let position = 0; position < vote.length; position++) {
      rankCounts.get(vote[position])[position]++;
    }
  }

  return [...rankCounts.keys()]
    .sort((teamA, teamB) => {
      const countsA = rankCounts.get(teamA);
      const countsB = rankCounts.get(teamB);

      for (let position = 0; position < countsA.length; position++) {
        if (countsA[position] !== countsB[position]) {
          return countsB[position] - countsA[position];
        }
      }

      return teamA < teamB ? -1 : teamA > teamB ? 1 : 0;
    })
    .join("");
};
