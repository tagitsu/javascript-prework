const buttonRock = document.getElementById('button-rock');
buttonRock.addEventListener('click', function(){ buttonClicked('kamień'); });

const buttonPaper = document.getElementById('button-paper');
buttonPaper.addEventListener('click', function(){ buttonClicked('papier'); });

const buttonScissors = document.getElementById('button-scissors');
buttonScissors.addEventListener('click', function(){ buttonClicked('nożyce'); });

const clickSound = new Audio('audio/click.wav');

const results = document.getElementById('results');

let playerWins = 0;
let computerWins = 0;

let randomNumber, computerMove, playerMove;
/**
 *  supports one turn in the game
 */
function buttonClicked(argButtonName) {
  clickSound.play();
  clearMessages();
  playerMove = argButtonName;
  randomNumber = Math.floor(Math.random() * 3 + 1);
  computerMove = getMoveName(randomNumber);
  displayResult(playerMove, computerMove);

  /**
   * changes choosen/random number into a move name
   */
  function getMoveName(argMoveId) {
    if (argMoveId == 1) {
      return 'kamień';
    } else if (argMoveId == 2) {
      return 'papier';
    } else if (argMoveId == 3) {
      return 'nożyce';
    } else {
      printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
      return 'kamień';
    }
  }
  /**
   * analyzes possible combinations of movements
   */
  function displayResult(argPlayerMove, argComputerMove) {
    console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
    if ((argPlayerMove == 'papier' && argComputerMove == 'kamień') || (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') || (argPlayerMove == 'nożyce' && argComputerMove == 'papier')) {
      printMessage('Wygrywasz!');
      playerWins = playerWins + 1;
    } else if (argPlayerMove == argComputerMove) {
      printMessage('Remis');
    } else {
      printMessage('Przegrywasz :(');
      computerWins = computerWins + 1;
    }
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
  }

  if (playerWins > 2 || computerWins > 2) {
    clearMessages();
    if (playerWins > computerWins) {
      printMessage('Ty wygrałeś!');
      buttonRock.disabled = true;
      buttonPaper.disabled = true;
      buttonScissors.disabled = true;
    } else if (playerWins < computerWins) {
      printMessage('Ja wygrałem!');
      buttonRock.disabled = true;
      buttonPaper.disabled = true;
      buttonScissors.disabled = true;
    }
  }
  results.innerHTML = playerWins + '-' + computerWins;
}
