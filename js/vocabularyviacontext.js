"use strict";

const questionBody = document.getElementById("js-question_body");
const question = document.getElementById("js-question");
const questionOptionOne = document.getElementById("js-question_option_one");
const questionOptionTwo = document.getElementById("js-question_option_two");
const questionOptionThree = document.getElementById("js-question_option_three");
const questionOptionFour = document.getElementById("js-question_option_four");


let content = [
  {
    targetWord: "setback",
    body: "Although there were some <span class='target-word'>setbacks</span> during the project, the team was able to complete it within the given time limits.",
    question: "What does \"setback\" mean according to the text above?",
    options: ["advantage", "surprise", "problem", "development"]  
  },
  {}
]

questionBody.innerHTML = content[0].body;
question.innerHTML = content[0].question;
questionOptionOne.innerHTML += content[0].options[0];
questionOptionTwo.innerHTML += content[0].options[1];
questionOptionThree.innerHTML += content[0].options[2];
questionOptionFour.innerHTML += content[0].options[3];