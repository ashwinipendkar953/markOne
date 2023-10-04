import readlineSync from "readline-sync";
import chalk from 'chalk';
var score = 0;
var highScores = [
  {
    name: "Ashwini",
    score: 5,
  },
  {
    name: "Varad",
    score: 3,
  }
]

const questions = [
  {
    question: "What is my favorite color?",
    answer: "Pink",
  },
  {
    question: "What is my preferred travel destination?",
    answer: "Paris",
  },
  {
    question: "What is my favorite fruit?",
    answer: "Mango",
  },
  {
    question: "What is my favorite hobby?",
    answer: "Painting",
  },
  {
    question: "Which dessert i like most?",
    answer: "Chocolate cake",
  },
];

function line() {
  console.log("-------------");
}

// welcome the user
function welcome() {
  var userName = readlineSync.question("Enter your Name: ");
  var welcomeMsg = ("Welcome " + chalk.bold(userName) + " to 'DO YOU KNOW Ashwini?' game");
  console.log(chalk.blue.underline(welcomeMsg));
  console.log("Play to find out who really knows Ashwini");
}

// play game 
function quiz(question, answer) {
  let userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log(chalk.bgGreen("You Are Right"));
    score++;
  } else {
    console.log(chalk.bgRed("You Are Wrong"));
  }
  console.log(chalk.cyan("Score : " + score));
  line();
}

function play() {
  for (let i = 0; i < questions.length; i++) {
    let currentQuestion = questions[i];
    quiz(currentQuestion.question, currentQuestion.answer);
  }
}


// show score
function showScore() {
  console.log(chalk.blue("YAY! You Scored " + score));
  console.log("Check out the high scores : ");
  highScores.map(score => console.log(chalk.inverse(score.name + " : " + score.score)));
  line();
  for (let i = 0; i < highScores.length; i++) {
    let currentScore = highScores[i];
    if (!(score < currentScore)) {
      console.log(chalk.yellow("Congratulations on your high score! Please share a screenshot of your score, and I will update the data."));
      //   level2();
      break;
    }
  }
}



function level2() {
  console.log(chalk.bgBlue("Go to level 2"));
}

welcome();
line();
play();
showScore();
