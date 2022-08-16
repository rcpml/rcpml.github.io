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
let hasFinished = false;

let content = [
  {
    targetWord: "setback",
    body: "Although there were some <span class='target-word'>setbacks</span> during the project, the team was able to complete it within the given time limit.",
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


function displayQuestion() {
  questionPassage.innerHTML = content[questionNumber].body;
  question.innerHTML = content[questionNumber].question;
  questionOptionOne.innerHTML = content[questionNumber].options[0];
  questionOptionTwo.innerHTML = content[questionNumber].options[1];
  questionOptionThree.innerHTML = content[questionNumber].options[2];
  questionOptionFour.innerHTML = content[questionNumber].options[3];
  correctAnswer = content[questionNumber].correctOption;
}
displayQuestion();

function checkAnswer(evt) {
  if (hasUserAnswered === true) {
    console.log("Already answered");
    return;
  }
  if (evt.target.innerText == correctAnswer) {
    addClass(evt.target, "correct-answer");
  } else {
    addClass(evt.target, "wrong-answer");
  }
  markAsAnswered();
}


function addClass(targetEl, className) {
  targetEl.classList.add(className);
}

function removeClass(targetEl, ...classNames) {
  for (let i = 0; i < classNames.length; i++) {
    targetEl.classList.remove(classNames[i]);
  }
}

function markAsAnswered() {
  hasUserAnswered = true;
}

function markAsNotAnswered() {
  hasUserAnswered = false;
}


function changetoNextQuestion() {
  if (hasUserAnswered == false) {
    alert("Please answer this question first!");
    return;
  };

  if (questionNumber+1 == content.length && !hasFinished) {
    alert("All questions answered! Click NEXT again to start over!");
    changeInnerText(nextButton, "Restart!");
    hasFinished = true;
    return;
  }

  if (hasFinished) {
    console.log("Reset");
    hasFinished = false;
    resetApp();
  }

  ++questionNumber;

  removeClass(questionOptionOne, "correct-answer", "wrong-answer");
  removeClass(questionOptionTwo, "correct-answer", "wrong-answer");
  removeClass(questionOptionThree, "correct-answer", "wrong-answer");
  removeClass(questionOptionFour, "correct-answer", "wrong-answer");

  markAsNotAnswered();
  displayQuestion();
};

function resetApp() {
  markAsNotAnswered();
  questionNumber = 0;
  changeInnerText(nextButton, "Next")
};

function changeInnerText(el, text) {
  el.innerText = text;
}

questionOptionOne.addEventListener("click", checkAnswer);
questionOptionTwo.addEventListener("click", checkAnswer);
questionOptionThree.addEventListener("click", checkAnswer);
questionOptionFour.addEventListener("click", checkAnswer);
nextButton.addEventListener("click", changetoNextQuestion);