'use strict';

//*================================================================
//*================ Simple Code ( الكود العادي ) 🏗️ =================
//*================================================================

/*

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
   const guess = Number(document.querySelector('.guess').value);

   console.log(guess, typeof guess);

   //^ When there is no input ( input لو مفيش قيمة في الـ )
   //* Falsy Value لإن الـ0 عبارة عن
   //* Falsy Value وكذلك القيمة الفاضية بردو
   //* True وبالتالي عكسهم يكون
   if (!guess) {
      document.querySelector('.message').textContent = '⛔ No number!';

      //^ When player wins ( لما اللاعب يفوز ) :
   } else if (guess === secretNumber) {
      document.querySelector('.message').textContent = '🎉 Correct Number';
      document.querySelector('body').style.backgroundColor = '#23961b';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = secretNumber; //* يظهر الرقم

      //^ Highscore جزئية الـ
      if (score > highScore) {
         highScore = score;
         document.querySelector('.highscore').textContent = highScore;
      }

      //^ When guess is too high ( لو الرقم ال تم تخمينه اكبر من الرقم السري )
   } else if (guess > secretNumber) {
      if (score > 1) {
         document.querySelector('.message').textContent = '📈 Too high!';
         score--;
         document.querySelector('.score').textContent = score;
      } else {
         document.querySelector('.message').textContent =
            '💥 You lost the game!';
         document.querySelector('.score').textContent = 0;
      }

      //^ When guess is too low ( لو الرقم ال تم تخمينه اصغر من الرقم السري )
   } else if (guess < secretNumber) {
      if (score > 1) {
         document.querySelector('.message').textContent = '📉 Too low!';
         score--;
         document.querySelector('.score').textContent = score;
      } else {
         document.querySelector('.message').textContent =
            '💥 You lost the game!';
         document.querySelector('.score').textContent = 0;
      }
   }
});

//^ Reset ( new game كإننا بنقول ليه )
document.querySelector('.again').addEventListener('click', function () {
   score = 20;
   secretNumber = Math.trunc(Math.random() * 20) + 1; //* علشان يعمل رقم عشوائي جديد
   document.querySelector('.number').textContent = '?';
   document.querySelector('.score').textContent = score;
   document.querySelector('.guess').value = '';
   document.querySelector('.message').textContent = 'Start guessing...';
   document.querySelector('body').style.backgroundColor = '#222';
   document.querySelector('.number').style.width = '15rem';
});

*/

//*================================================================
//*=========== Refactoring Our Code ( الكود المُحسن ) ✨ ===========
//*================================================================

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
   document.querySelector('.message').textContent = message;
};

const displayHighscore = function (highscore) {
   document.querySelector('.highscore').textContent = highscore;
};

const displayScore = function (score) {
   document.querySelector('.score').textContent = score;
};

const displayNumber = function (number) {
   document.querySelector('.number').textContent = number;
};

const numberWidth = function (width) {
   document.querySelector('.number').style.width = width;
};

const bodyColor = function (color) {
   document.querySelector('body').style.backgroundColor = color;
};

//*===============

document.querySelector('.check').addEventListener('click', function () {
   const guess = Number(document.querySelector('.guess').value);

   //^ When there is no input ( input لو مفيش قيمة في الـ )
   //* Falsy Value لإن الـ0 عبارة عن
   //* Falsy Value وكذلك القيمة الفاضية بردو
   //* True وبالتالي عكسهم يكون
   if (!guess) {
      displayMessage('⛔ No number!');

      //^ When player wins ( لما اللاعب يفوز ) :
   } else if (guess === secretNumber) {
      displayMessage('🎉 Correct Number');
      bodyColor('#23961b');
      numberWidth('30rem');
      displayNumber(secretNumber); //* يظهر الرقم

      //^ Highscore جزئية الـ
      if (score > highScore) {
         highScore = score;
         displayHighscore(highScore);
      }

      //^ لو الرقم ال تم تخمينه اكبر او اصغر من الرقم السري
   } else if (guess !== secretNumber) {
      if (score > 1) {
         // document.querySelector('.message').textContent =
         //    guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
         displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
         score--;
         displayScore(score);
      } else {
         displayMessage('💥 You lost the game!');
         displayScore(0);
      }
   }
});

//*===============

//^ Reset ( new game كإننا بنقول ليه )
document.querySelector('.again').addEventListener('click', function () {
   score = 20;
   secretNumber = Math.trunc(Math.random() * 20) + 1; //* علشان يعمل رقم عشوائي جديد
   document.querySelector('.guess').value = '';
   displayNumber('?');
   displayScore(score);
   displayMessage('Start guessing...');
   bodyColor('#222');
   numberWidth('15rem');
});
