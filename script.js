'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.number').value = 12;
// console.log(document.querySelector('.number').value);

let answer = Math.ceil(Math.random() * 20);
let score = 20;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('Please insert a number');
  } else if (guess === answer) {
    displayMessage('Correct!!');
    document.querySelector('.number').textContent = answer;
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    if (score > Number(document.querySelector('.highscore').textContent)) {
      document.querySelector('.highscore').textContent = score;
    }
  } else if (guess !== answer) {
    displayMessage(guess < answer ? 'The guess is low' : 'The guess is high');
    if (score > 0) {
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('Game Over');
      document.querySelector('.number').textContent = answer;
      document.querySelector('body').style.backgroundColor = 'red';
      document.querySelector('.number').style.width = '30rem';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  displayMessage('start guessing...');
  document.querySelector('.score').textContent = 20;
  score = 20;
  document.querySelector('.guess').value = '';
  answer = Math.ceil(Math.random() * 20);
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
