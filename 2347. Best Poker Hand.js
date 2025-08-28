/**
 * @param {number[]} ranks
 * @param {character[]} suits
 * @return {string}
 */
var bestHand = function (ranks, suits) {
  const firstSuit = suits[0];
  let isFlush = true;
  for (let i = 1; i < suits.length; i++) {
    if (suits[i] !== firstSuit) {
      isFlush = false;
      break;
    }
  }
  if (isFlush) return "Flush";

  const rankCount = new Map();
  for (let i = 0; i < ranks.length; i++) {
    rankCount.set(ranks[i], (rankCount.get(ranks[i]) || 0) + 1);
  }

  let hasPair = false;
  for (const [, count] of rankCount) {
    if (count >= 3) return "Three of a Kind";
    if (count === 2) hasPair = true;
  }

  return hasPair ? "Pair" : "High Card";
};
