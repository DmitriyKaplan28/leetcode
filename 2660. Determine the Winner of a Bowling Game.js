/**
 * @param {number[]} player1
 * @param {number[]} player2
 * @return {number}
 */
var isWinner = function(player1, player2) {
    const getScore = (arr) => {
    let score = 0;
    for (let i = 0; i < arr.length; i++) {
      if ((i > 0 && arr[i - 1] === 10) || (i > 1 && arr[i - 2] === 10)) {
        score += 2 * arr[i];
      } else {
        score += arr[i];
      }
    }
    return score;
     };

  const score1 = getScore(player1);
  const score2 = getScore(player2);

  if (score1 > score2) return 1;
  if (score2 > score1) return 2;
  return 0; 
};
