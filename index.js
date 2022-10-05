var read = require('readline-sync');

// var read = require('readline-sync');
console.log("How well do you know me? ")

// var question1=
// {
//  question : "What is your name? ",
//  answer : "krishna"
// }

// var question2=
//   {
//     question : "Where do you live? ",
//     answer : "jpnagar"
//   }



var highscores=
  [
    {
      name : "Syed",
      score : 10
    },
    {
      name : "Ishaan",
      score : 9
    },
    {
      name : "Divya",
      score : 8
    }
  ]
var questions =
  [
    {
      question: "What is your name? ",
      answer: "krishna"
    },
    {
      question: "Where do you live? ",
      answer: "jpnagar"
    },
    {
      question: "What is your favourite food? ",
      answer: "puliyogare"
    },
    {
      question: "What is your favourite sport? ",
      answer: "tennis"
    },
    {
      question: "What is your favourite getaway? ",
      answer: "mountains"
    }
    
  ]


var score = 0;

function play(question, answer) {
  // console.log(question);
  useranswer = read.question(question);

  if (useranswer === answer) {
    console.log("you are right! ");
    score = score + 1;
  } else {
    console.log("you are wrong");
  }
  console.log("Your score is " + score)
  console.log("------------")
  
}




for (var i = 0; i < questions.length; i++) {
  play(questions[i].question, questions[i].answer)
}
// play(question1.question,question1.answer)

console.log("Your final is " + score + " !");
console.log("------------")

console.log("Check out the highest scores!");
for (var i =0;i< highscores.length;i++)
  {
    console.log(highscores[i].name + "  "+ highscores[i].score)
  }

console.log("------------")
console.log("If you have beaten the highscore, please send the screenshot.")