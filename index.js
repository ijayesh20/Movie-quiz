//install package
readlineSync = require("readline-sync");

//welcome message
var username = readlineSync.question("What is your name? ");
console.log("Welcome " + username + " to the Movie quiz \n" );

// Highscores
var score = 0;
highScore =[
    {name:"jayesh" , highscore: 6},
    {name:"random" , highscore: 4}
  ]

//quiz function
function quiz(question,answer){
    var useranswer = readlineSync.question(question);
  
    if(useranswer === answer ){
      console.log(" You are Right");
      score = score + 1 ;
    }
    else{
      console.log(" You are Wrong");
    }
    console.log(" Your score : ",score);
    console.log("-------------------------------");
  }
  
 //array of questions and answers(objects)   
 qna = [
    {
      question:"What is the name of the character played by Aamir Khan in movie Dangal?\n A Kabir Singh Phogat \n B Mahaveer Singh Phogat \n C Karanveer Singh Phogat \n ",
      answer:'B'
    },
    {
      question: "Movie Dangal- How did they got into wrestling? \n A It was their father's dream \n B They like wrestling \n C It was their dream \n ",
      answer:"A"
    },
    {
      question: "Movie Dangal- What did they miss eating the most? \n A Samosa \n B Pav Bhaji \n C Gol Gappa \n ",
      answer: "C"
    },
    {
      question: "Movie PK- Where was Sarfaraz doing a part time job? \n A Indian Embassy \n B US Embassy \n C Pakistan Embassy \n ",
      answer: "C"
    },
    {
      question: "Movie PK- What the real name of Jaggu? \n A Jayashree \n B Jagat Janani \n C Jayabani \n ",
      answer: "B"
    },
    {
      question: "Movie PK- In which city did PK remote got stolen? \n A Mandava \n B Jaipur \n C Mumbai \n ",
      answer: "A"
    },
    {
      question: "Movie Queen- Where does Vijay tell Rani that he does not want to get married to her? \n A Starbucks \n B Cafe Coffee Day \n C Domino's \n ",
      answer: "B"
    },
    {
      question: "Movie Queen- What did Rani's dad do? \n A Own a sweet shop \n B Own a repair shop \n C Own a car shop \n ",
      answer: "A"
    },
    {
      question: "Movie Queen- What makes her scares when she was having a bath at Amsterdam Hotel? \n A Bee  \n B Cockroach \n C Lizard \n ",
      answer: "C"
    }
  ]
  
//for calling questions one by one
for(i=0;i<qna.length;i++){
    quiz(qna[i].question,qna[i].answer);
  }

// Output high scores and check if user has beaten high score or not
if(score >= highScore[0].highscore){
    console.log(" Congratulations!!! You made a new High score ");
    console.log(" Do share the screenshot of your score with me to get add to Highscore list")
  }
console.log("-------------------------------")
console.log("HighScores")
for (var j = 0; j <= highScore.length; j++) {
    console.log(highScore[j].name, highScore[j].highscore)
    }