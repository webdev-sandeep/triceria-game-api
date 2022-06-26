import express from "express";
import cors from "cors";
import "./game.js";
import { game } from "./game.js";

//Game Related Stuff
let player1, player2, player3, player4;

const assignValue = () => {
  const randomInt = Math.floor(Math.random() * 3) + 1;
  switch (randomInt) {
    case 1:
      return "Rock";
    case 2:
      return "Paper";
    case 3:
      return "Scissor";
  }
  return -1;
};

const app = express();

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send(`<h1>Welcome to the game zone</h1>`);
});

app.use("/game/start", (req, res) => {
  let totalGames = [];
  let totalScores = [];
  for (let i = 0; i < 4; i++) {
    totalScores[i] = [];
    for (let j = 0; j < 4; j++) {
      if (i === j) {
        totalScores[i][j] = null;
      } else {
        totalScores[i][j] = 0;
      }
    }
  }
  // console.log(scores);
  for (let i = 0; i < 50; i++) {
    player1 = assignValue();
    player2 = assignValue();
    player3 = assignValue();
    player4 = assignValue();
    const player = [player1, player2, player3, player4];
    let { result, scores } = game({ player, totalScores });
    totalScores = scores;
    totalGames.push(result);
  }

  res.send(totalGames);
});

app.listen(process.env.PORT || 5000, () => {
  console.log(
    `server is running at http://localhost:${process.env.PORT || 5000}`
  );
});
