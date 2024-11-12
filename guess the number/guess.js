"use strict";
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 10;
let highScore = 0;
//document.querySelector(".secret").textContent = secretNumber;
document.querySelector(".check").addEventListener("click", function () {
  function action() {}
  //score function
  function totalScore() {
    number == secretNumber ? score : score--;
    document.querySelector(".scorevalue").textContent = score;
    if (score == 0)
      document.querySelector(".message").textContent = "You lost😔";
    else if (score < 0) return;
  }
  function inputReset() {
    return (document.querySelector(".input").value = "Enter a Number ");
  }
  function textColor() {
    number == secretNumber
      ? (document.querySelector(".message").style.color = "#b8e994")
      : (document.querySelector(".message").style.color = "#e84118");
  }
  //if no number entered
  const number = document.querySelector(".input").value;
  if (!number) {
    document.querySelector(".message").textContent = "Please Enter a Number";
  } else if (number < 0)
    document.querySelector(".message").textContent = "Enter Positive Number";
  //if guess is correct
  else if (number == secretNumber) {
    document.querySelector(".message").textContent = "🥳Correct...";
    document.querySelector(".message").style.color = "#4cd137";
    document.querySelector("body").style.backgroundColor = "#4cd137";
    totalScore();
    textColor();
    document.querySelector(".secret").textContent = secretNumber;
    document.querySelector(".input").disabled = true;
    document.querySelector(".check").disabled = true;
    if (score > highScore) highScore = score;
    document.querySelector(".highscorevalue").textContent = highScore;
  }
  //if guess is wrong
  else if (number > secretNumber) {
    if (score > 0) {
      document.querySelector(".message").textContent = "😥Too High...";
      totalScore();
      inputReset();
      textColor();
    }
  } else if (number < secretNumber) {
    if (score > 0) {
      document.querySelector(".message").textContent = "😥Too Low...";
      totalScore();
      inputReset();
      textColor();
    }
  }
});
document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 10;
  //document.querySelector(".secret").textContent = secretNumber;
  document.querySelector(".scorevalue").textContent = score;
  document.querySelector(".message").textContent = "start Guessing...";
  document.querySelector(".secret").textContent = "❓";
  document.querySelector(".input").value = "Enter a Number ";
  document.querySelector(".input").disabled = false;
  document.querySelector(".check").disabled = false;
  document.querySelector("body").style.backgroundColor = "#2c3a47";
  if (score > highScore)
    document.querySelector(".highscorevalue").textContent = highScore;
});
