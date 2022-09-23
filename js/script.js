var randomNumber;
randomNumber = Math.floor(Math.random() * 3 + 1);
printMessage('Wylosowana liczba to: ' + randomNumber);

randomNumber2 = Math.floor(Math.random() * 8 + 12);
printMessage('Druga wylosowana liczba to: ' + randomNumber2);

var computerMove;

if(randomNumber == '1') {
    computerMove = 'kamień'; 
} else if (randomNumber == '2') {
    computerMove = 'papier'; 
} else if (randomNumber == '3') {
    computerMove = 'nożyce';
}
printMessage('Mój ruch: ' + computerMove);