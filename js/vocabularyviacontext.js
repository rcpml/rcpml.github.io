"use strict";

const questionPassage = document.getElementById("js-question_passage");
const question = document.getElementById("js-question");
const questionOptionOne = document.getElementById("js-question_option_one");
const questionOptionTwo = document.getElementById("js-question_option_two");
const questionOptionThree = document.getElementById("js-question_option_three");
const questionOptionFour = document.getElementById("js-question_option_four");
const feedbackArea = document.getElementById("js-feedback-area");
const nextButton = document.getElementById("js-next-button");
let correctAnswer = "";
let hasUserAnswered = false;
let userAnswer = "";
let questionNumber = 0;

let content = [
  {
    targetWord: "setback",
    body: "Although there were some <span class='target-word'>setbacks</span> during the project, the team was able to complete it within the given time limits.",
    question: 'What does "setback" mean according to the text above?',
    options: ["advantage", "surprise", "problem", "development"],
    correctOption: "problem",
  },
  {
    targetWord: "reveal",
    body: "New studies <span class='target-word'>revealed</span> that excessive exercise can be bad for our body for the long-term.",
    question: 'What does "reveal" mean according to the text above?',
    options: ["state", "highlight", "speak", "uncover"],
    correctOption: "uncover",
  },
  {
    targetWord: "inevitable",
    body: "The defeat of the enemy was <span class='target-word'>inevitable</span> since they were surrounded by all sides.",
    question: 'What does "inevitable" mean according to the text above?',
    options: ["inescapable", "potential", "dangerous", "unattainable"],
    correctOption: "inescapable",
  },
];

function displayQuestion() {
  questionPassage.innerHTML = content[questionNumber].body;
  question.innerHTML = content[questionNumber].question;
  questionOptionOne.innerHTML = content[questionNumber].options[0];
  questionOptionTwo.innerHTML = content[questionNumber].options[1];
  questionOptionThree.innerHTML = content[questionNumber].options[2];
  questionOptionFour.innerHTML = content[questionNumber].options[3];
  correctAnswer = content[questionNumber].correctOption;
}

function shuffle(array) {
  let m = array.length,
    t,
    i;
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

function checkAnswer(evt) {
  if (hasUserAnswered === true) {
    console.log("Already answered");
    return;
  }

  if (evt.target.innerText == correctAnswer) {
    changeClassName(evt.target, "correct-answer");
    displayFeedback("Correct!", "feedback-correct");
  } else {
    changeClassName(evt.target, "wrong-answer");
    displayFeedback("Wrong!", "feedback-wrong");
  }

  markAsAnswered();
}

function displayFeedback(message, className) {
  feedbackArea.innerText = message;
  feedbackArea.classList.add(className);
}

function changeClassName(targetEl, className) {
  targetEl.classList.add(className);
}

function markAsAnswered() {
  hasUserAnswered = true;
}

function markAsNotAnswered() {
  hasUserAnswered = false;
}

function changetoNextQuestion() {
  ++questionNumber;
  markAsNotAnswered();
  displayQuestion();
}

questionOptionOne.addEventListener("click", checkAnswer);
questionOptionTwo.addEventListener("click", checkAnswer);
questionOptionThree.addEventListener("click", checkAnswer);
questionOptionFour.addEventListener("click", checkAnswer);

nextButton.addEventListener("click", changetoNextQuestion);