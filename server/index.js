const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json()); // When we want to be able to accept JSON.

const encouragement = [
  {
    id: 1,
    name: "Tyland",
    message: "Keep going hard",
  },
  {
    id: 2,
    name: "Tyland",
    message: "You are improving every day ",
  },
  {
    id: 3,
    name: "Tyland",
    message: "I'm proud of you",
  },
];

const badThoughts = [
  {
    id: 1,
    message: "you are doing it wrong",
  },
  {
    id: 2,
    message: "you won't make it",
  },
  {
    id: 3,
    message: "give up",
  },
];

app.get("/api/compliment", (req, res) => {
  const compliments = [
    "Gee, you're a smart cookie!",
    "Cool shirt!",
    "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
});

app.get("/api/compliment/", (req, res) => {
  const fortunes = [
    "you will be successful.",
    "you will make your dreams come true",
    "you will be happy",
    "you will make others happy",
    "others will make you happy",
  ];

  let randomInd = Math.floor(Math.random() * fortunes.length);
  let randomFortune = fortunes[randomInd];

  res.status(200).send(console.log(randomFortune));
});

app.post("/api/compliment", (req, res) => {
  const { name, message } = req.body;
  let newMessage = {
    id,
    name,
    message,
  };

  encouragement.push(newMessage);
  res.status(200).send(encouragement);
  id++;
});

app.delete("/api/compliment/:id", (req, res) => {
  const { id } = req.params;

  const tgtIndex = badThoughts.findIndex(function (badThoughtsObj) {
    return badThoughtsObj.id === parseInt(id);
  });
  if (tgtIndex === -1) {
    res.status(404).send("No bad thoughts here!");
  } else {
    badThoughts.splice(tgtIndex, 1);
    res.status(200).send(badThoughts);
  }
});

app.listen(4000, () => console.log("Server running on 4000"));
