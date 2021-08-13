//install package
readlineSync = require("readline-sync");

//welcome message
var username = readlineSync.question("What is your name? ");
console.log("Welcome " + username + " to the Movie quiz \n" );

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
  