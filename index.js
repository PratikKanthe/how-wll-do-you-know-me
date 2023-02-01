// Quize App

var readlineSync = require('readline-sync');

var score = 0;

var username = readlineSync.question("Enter Your Name: ");
console.log("Welcome " + username + " To Who Know's Pratik");

if (readlineSync.keyInYN('Are you ready? ')) {
  console.log('Lets go...');
} else {
  console.log('You quited');
  return;
}

//play function

function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log('Your right');
    score = score + 1;
    console.log('Current score is: ' + score);
  } else {
    console.log('Your wrong');
    score = score - 1;
    console.log('Current score is: ' + score);
  }

  console.log("------------------------------------------- ");
}

var questions = [
  {
    question: "What's my favorite food? ",
    answer: "Pohe"
  },
  {
    question: "What's my favorite song? ",
    answer: "Tum se hi"
  },
  {
    question: "Who's my favorite cricketer? ",
    answer: "Rohit Sharma"
  },
  {
    question: "What's my favorite color? ",
    answer: "Blue"
  },
  {
    question: "What's my dream? ",
    answer: "India tour"
  }
];


for (i = 0; i < questions.length; i++) {
  var quizeQuestion = questions[i];
  play(quizeQuestion.question, quizeQuestion.answer);
}


var highScores = [
  {
    name: "Pratik",
    scored: 5
  },
  {
    name: "Priya",
    scored: 5
  }
];

if (readlineSync.keyInYN('want to see highscore')) {
  for (i = 0; i < highScores.length; i++) {
    var knowScore = highScores[i];
    console.log("highscore is: " + knowScore.name, knowScore.scored);
  }
} else {
  console.log('You quited');
  return;
}