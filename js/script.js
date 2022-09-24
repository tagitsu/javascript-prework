
var argMoveId, argPlayerMove, argComputerMove, computerMove, playerMove, randomNumber, playerInput, playerWins, computerWins;
var argButtonName, buttonRock, buttonPaper, buttonScissors;
var clickSound;


buttonRock = document.getElementById('button-rock');
buttonRock.addEventListener('click', function(){ buttonClicked('kamień'); });

buttonPaper = document.getElementById('button-paper');
buttonPaper.addEventListener('click', function(){ buttonClicked('papier'); });

buttonScissors = document.getElementById('button-scissors');
buttonScissors.addEventListener('click', function(){ buttonClicked('nożyce'); });

clickSound = new Audio('audio/click.wav');

results = document.getElementById('results');

playerWins = 0;
computerWins = 0;


/**
 *  supports one turn in the game
 */
function buttonClicked(argButtonName) {
    clickSound.play();
    clearMessages();
    console.log(argButtonName + ' został kliknięty');
    
    playerMove = argButtonName;
    console.log('ruch gracza to: ' + playerMove);
    randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('wylosowana liczba to: ' + randomNumber);
    computerMove = getMoveName(randomNumber);
    console.log('ruch komputera to: ' + computerMove);
    displayResult(playerMove, computerMove);
    
    /**
     * changes choosen/random number into a move name
     */
    function getMoveName(argMoveId) {
        console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
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
        };
            printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);           
    }

    if (playerWins == 3 || computerWins == 3) {
        console.log('Koniec gry');
        clearMessages();
        if (playerWins > computerWins) {
            printMessage('Ty wygrałeś!');
        } else if (playerWins < computerWins) {
            printMessage('Ja wygrałem!');
        }
    } 
    
    results.innerHTML = playerWins + '-' + computerWins;

} 



