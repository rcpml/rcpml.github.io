"use strict";
import { content } from "./content.js";

const questionPassage = document.getElementById("js-question_passage");
const question = document.getElementById("js-question");
const questionOptionOne = document.getElementById("js-question_option_one");
const questionOptionTwo = document.getElementById("js-question_option_two");
const questionOptionThree = document.getElementById("js-question_option_three");
const questionOptionFour = document.getElementById("js-question_option_four");
const feedbackArea = document.getElementById("js-feedback-area");
const nextButton = document.getElementById("js-next-button");
const optionGroupOne = document.getElementById("option-group-one");
const optionGroupTwo = document.getElementById("option-group-two");
let correctAnswer = "";
let hasUserAnswered = false;
let userAnswer = "";
let questionNumber = 0;
let hasFinished = false;

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
shuffle(content[questionNumber].options);


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
    setTimeout(() => {
      highlightCorrectOption(optionGroupOne);
      highlightCorrectOption(optionGroupTwo);
    }, 500);
  }
  markAsAnswered();
}


function addClass(targetEl, ...classNames) {
  for (let i = 0; i < classNames.length; i++) {
    targetEl.classList.add(classNames[i]);
  }}

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

function highlightCorrectOption(parentEl) {
  let children = parentEl.childNodes;
  console.log(children[1]);
  console.log(children[3]);
  if (children[1].innerText === correctAnswer) {
    children[1].classList.add("correct-answer");
  }
  if (children[3].innerText === correctAnswer) {
    children[3].classList.add("correct-answer");
  }
}


