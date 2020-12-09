// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const dice01El = document.querySelector('.dice--1');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const scoresValue = document.querySelector('#score-input');

let scores, currentScore, activePlayer, playing;

// Starting conditions

function init() {
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;
  
    diceEl.classList.add('hidden');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
    document.querySelector('#name--0').textContent = 'Player 1';
    document.querySelector('#name--1').textContent = 'Player 2';

    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
  };

init();



var x = document.querySelector('#score--0').textContent;


btnRoll.addEventListener('click', () => {
    if(playing){
        var dice = Math.floor(Math.random() * 6) + 1;

        var diceDOM = diceEl;
        diceDOM.style.display = 'block';
        diceDOM.src = './img/dice-' + dice + '.png';
    
        var dice01 = Math.floor(Math.random() * 6) + 1;

        var diceDOM = dice01El;
        diceDOM.style.display = 'block';
        diceDOM.src = './img/dice-' + dice01 + '.png';

        let mainDice = dice + dice01;
    
        if (dice !== 1 && dice01 !== 1) {
            currentScore += mainDice;
            document.querySelector('#current--' + activePlayer).textContent = currentScore;
        } else {
            nextPlayer();
        }
    }

});

btnHold.addEventListener('click', () => {
    if(playing){
        scores[activePlayer] += currentScore;

        document.querySelector('#score--' + activePlayer).textContent = scores[activePlayer];
    
        if (scores[activePlayer] >= scoresValue.value){
            document.querySelector('#name--' + activePlayer).textContent = 'winner!';
            diceEl.style.display = 'none';
            dice01El.style.display = 'none';
    
            document.querySelector('.player--' + activePlayer).classList.add('player--winner');
            document.querySelector('.player--' + activePlayer).classList.remove('active');

            playing = false;
        } else {
            nextPlayer();
        }
    }

    
});

function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    currentScore = 0;

    current0El.textContent = '0';
    current1El.textContent = '0';

    document.querySelector('.player--0').classList.toggle('player--active');
    document.querySelector('.player--1').classList.toggle('player--active');

    diceEl.style.display = 'none';
    dice01El.style.display = 'none';
};


btnNew.addEventListener('click', init);
