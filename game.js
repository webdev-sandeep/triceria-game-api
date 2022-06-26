export const game = ({ player, totalScores }) => {
  const assignScore = ({ playerX, playerY }) => {
    if (playerX === playerY) {
      return 0;
    } else if (playerX === "Rock") {
      return playerY === "Paper" ? 0 : 1;
    } else if (playerX === "Paper") {
      return playerY === "Scissor" ? 0 : 1;
    } else {
      return playerY === "Rock" ? 0 : 1;
    }
  };

  let scores = [];
  for (let i = 0; i < 4; i++) {
    scores[i] = [];
    for (let j = 0; j < 4; j++) {
      if (i === j) {
        scores[i][j] = null;
      } else {
        scores[i][j] =
          totalScores[i][j] +
          assignScore({ playerX: player[i], playerY: player[j] });
      }
    }
  }
  const result = {
    player1: {
      against: [
        {
          player: "player2",
          score: scores[0][1],
        },
        {
          player: "player3",
          score: scores[0][2],
        },
        {
          player: "player4",
          score: scores[0][3],
        },
      ],
    },
    player2: {
      against: [
        {
          player: "player1",
          score: scores[1][0],
        },
        {
          player: "player3",
          score: scores[1][2],
        },
        {
          player: "player4",
          score: scores[1][3],
        },
      ],
    },
    player3: {
      against: [
        {
          player: "player1",
          score: scores[2][0],
        },
        {
          player: "player2",
          score: scores[2][1],
        },
        {
          player: "player4",
          score: scores[2][3],
        },
      ],
    },
    player4: {
      against: [
        {
          player: "player1",
          score: scores[3][0],
        },
        {
          player: "player2",
          score: scores[3][1],
        },
        {
          player: "player3",
          score: scores[3][2],
        },
      ],
    },
  };
  return { result, scores };
};
