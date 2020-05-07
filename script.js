const buttons = document.querySelectorAll('.pick');
const scoreEl = document.getElementById('Score');
const main = document.getElementById('game');
const selection = document.getElementById('selection');
const playAgain = document.getElementById('reset');
const user_select = document.getElementById('user_select');
const computer_select = document.getElementById('computer_select');
const winner = document.getElementById('winner');

const choices = ['paper', 'rock', 'scissors'];

let score = 0;
let userChoice = undefined;

buttons.forEach((button) => {
   button.addEventListener('click', () => {
     userChoice  = button.getAttribute('data-choice');

     checkWinner();
   });
});

reset.addEventListener('click', () => {
  main.style.display = 'flex';
  selection.style.display = 'none';
});


function checkWinner() {
    const computerChoice = pickRandomChoice();

    updateSelection(user_select, userChoice);
    updateSelection(computer_select, computerChoice);

    if (userChoice === computerChoice) {
      //Draw
      winner.innerText = 'draw'
      updateScore(0);
    } else if (userChoice === 'paper' && computerChoice === 'rock'
            || userChoice === 'rock' && computerChoice === 'scissors'
            || userChoice === 'scissors' && computerChoice === 'paper'
    ) {
      //user won
      winner.innerText = 'win'
      updateScore(5);
    } else {
      //user Lost
      winner.innerText = 'lost'
      updateScore(-1);
    }
    //show
    main.style.display = 'none';
    selection.style.display = 'flex';
  }

function updateScore(value){
   score += value;
   if(scoreEl){
     scoreEl.innerText = score;
   }
}

function pickRandomChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function updateSelection(selectionEl, choice) {
  selectionEl.classList.remove('btn-paper');
  selectionEl.classList.remove('btn-scissors');
  selectionEl.classList.remove('btn-rock');

  const img = selectionEl.querySelector('img');
  selectionEl.classList.add(`btn-${choice}`);
  img.src = `Assets/icon-${choice}.svg`;
  img.alt = choice;
}
