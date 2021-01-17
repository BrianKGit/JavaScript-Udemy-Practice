/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

// declare global variables
var scores, roundScore, activePlayer, gamePlaying, previousRoll6, winScore, scoreInput;

// call function to initialize new game
newGame();

// Event Listener for the Roll Button
document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gamePlaying) {
        //1. need a random number
        var die1 = Math.floor(Math.random() * 6) + 1;
        var die2 = Math.floor(Math.random() * 6) + 1;

        //2. display the result
        var dieDOM1 = document.querySelector('.die1');
        var dieDOM2 = document.querySelector('.die2');
        dieDOM1.style.display = 'block';
        dieDOM1.src = 'dice-' + die1 + '.png';
        dieDOM2.style.display = 'block';
        dieDOM2.src = 'dice-' + die2 + '.png';

        //3. update the round score but only IF the rolled number was NOT a 1
        if(die1 !== 1 && die2 !== 1) {
            if((previousRoll6 && die1 === 6) || (previousRoll6 && die2 === 6)){
                // if the dice roll is the second 6 in a row the player's entire score is 0 and next players turn
                scores[activePlayer] = 0;
                document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
                nextPLayer();
            } else if (die1 === 6 || die2 === 6){
                // if the dice roll is the first 6 mark it and add the score
                previousRoll6 = true;
                addScore(die1, die2);
            } else {
                // if the dice roll is not a six, reset the mark and add score
                previousRoll6 = false;
                addScore(die1, die2);
            }
        } else {
            // next player
            nextPLayer();
        }
    }
});

// Event Listener for the Hold Button
document.querySelector('.btn-hold').addEventListener('click', function() {
    if(gamePlaying) {
        //1. add current score to player global score
        scores[activePlayer] += roundScore;

        //2. update UI
        document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];

        //3. check if player won the game
        if(scores[activePlayer] >= winScore) {
            document.getElementById('name-' + activePlayer).textContent = 'WINNER!';
            document.querySelector('.die1').style.display = 'none';
            document.querySelector('.die2').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            nextPLayer();
        }   
    }
});

// Event Listener for the New Game Button
document.querySelector('.btn-new').addEventListener('click', newGame);


// Function to change players
function nextPLayer() {
    // toggle active player and change the roundScore = 0
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    previousRoll6 = false;

    // update UI to reflect roundScore = 0
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    // toggle the UI to reflect the current active player
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    //document.querySelector('.player-0-panel').classList.remove('active');
    //document.querySelector('.player-1-panel').classList.add('active');

    // remove the dice image at the beggining of a player's turn
    document.querySelector('.die1').style.display = 'none';
    document.querySelector('.die2').style.display = 'none';
}

// Function to initialize new game
function newGame() {
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    previousRoll6 = false;
    scoreInput = document.getElementById('win-num-input-id').value;
    scoreInput !== null && scoreInput > 9 && scoreInput < 151 ? winScore = scoreInput : winScore = 100;

    document.getElementById('win-num-p-id').textContent = 'Points to Win: ' + winScore;
    document.querySelector('.die1').style.display = 'none';
    document.querySelector('.die2').style.display = 'none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

}

function addScore(die1, die2) {
    // add score
    roundScore += (die1 + die2);
    document.querySelector('#current-' + activePlayer).textContent = roundScore;
}