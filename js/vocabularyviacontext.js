"use strict";

const questionPassage = document.getElementById("js-question_passage");
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
  {
    targetWord: "uncover",
    body: "New studies <span class='target-word'>revealed</span> that excessive exercise can be bad for our body for the long-term.",
    question: "What does \"reveal\" mean according to the text above?",
    options: ["state", "highlight", "speak", "reveal"]  
  },
  {
    targetWord: "inevitable",
    body: "The defeat of the enemy was <span class='target-word'>inevitable</span> since they were surrounded by all sides.",
    question: "What does \"inevitable\" mean according to the text above?",
    options: ["inescapable", "potential", "dangerous", "unattainable"] 
  }
]



function displayQuestion() {
  questionPassage.innerHTML = content[0].body;
  question.innerHTML = content[0].question;
  questionOptionOne.innerHTML += content[0].options[0];
  questionOptionTwo.innerHTML += content[0].options[1];
  questionOptionThree.innerHTML += content[0].options[2];
  questionOptionFour.innerHTML += content[0].options[3];  
}

function shuffle(array) {
  let m = array.length, t, i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
}

shuffle(content);
displayQuestion();

// TODO:
function checkAnswer() {
  
}