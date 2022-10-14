var read = require('readline-sync');

// var read = require('readline-sync');
console.log("Lets play the quiz!! How well do you know me? ")
console.log("------------")

var username=read.question("Please enter your name buddy? ")
console.log("------------")
console.log("Okay! "+username+" Here comes the questions!")

console.log("------------")

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
      question: "What do i work? ",
      answer: "genpact"
    },
    {
      question: "Where do i live? ",
      answer: "jpnagar"
    },
    {
      question: "What is my favourite food? ",
      answer: "puliyogare"
    },
    {
      question: "What is my favourite sport? ",
      answer: "tennis"
    },
    {
      question: "What is my favourite getaway? ",
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