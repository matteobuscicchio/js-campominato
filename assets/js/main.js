// checker
function checker(numOne, numTwo) {
    var index = 0;
    while (index < numOne.length) {
        if (numTwo === numOne[index]) {
            return true;
        }
        index++;
    }
}
// scelta difficoltà
var bomb, difficulty;
var sceltaLivello = Number(prompt('scegli la difficoltà; digita 0 per scegliere facile, 1 per medio e 2 per difficile', '0, 1 ,2'));
var index=0;
var errore=1;
while (index < errore) {
    if (sceltaLivello == 0) {
        bomb = 100;
        difficulty = 84;
        console.log(difficulty);
        index++;
    } else if (sceltaLivello == 1) {
        bomb = 80;
        difficulty = 64;
        console.log(difficulty);
        index++;
    } else if (sceltaLivello == 2) {
        bomb = 50;
        difficulty = 34;
        console.log(difficulty);
        index++;
    } else {
        var sceltaLivello = Number(prompt('scegli la difficoltà; digita 0 per scegliere facile, 1 per medio e 2 per difficile', '0, 1 ,2'));
    }
}
// numeri random
function bombs(gameBomb) {
    var numberArray = [];
    while(numberArray.length < 16){
        var randomNumber = Math.floor(Math.random() * gameBomb) + 1;
        if (numberArray.indexOf(randomNumber) === -1) {
            numberArray.push(randomNumber)
        }
    }
    oderedCpNumber = numberArray.sort();
    console.log(oderedCpNumber);
    return oderedCpNumber;
}
// scelta numero utente
function userLuck(gameBomb, gameDifficulty) {
    userNumberArray = [];
    while(userNumberArray.length < gameDifficulty ) {
        userNumber = Number(prompt('inserisci un numero'));
        if (checker(oderedCpNumber, userNumber)) {
            alert('Spiacente, hai perso. Con un punteggio pari a ' + userNumberArray.length);
            break;
        }
        if (userNumber === 0) {
            alert('il numero zero non è ammesso, scegline uno nuovo');
        } else if (userNumber > gameBomb) {
            alert('questo numero non è ammesso, scegline uno nuovo');
        } else if (userNumberArray.indexOf(userNumber) !== -1) {
            alert('hai già inserito questo numero, scegline uno nuovo');
        } else {
            userNumberArray.push(userNumber);
        }
    }
    if (userNumberArray.length == gameDifficulty) {
        alert('Complimenti, hai vinto. Hai dato '+ userNumberArray.length + ' risposte esatte consecutivamente. Il tuo puntegio finale è ' + gameBomb);
    }
}
//ESECUZIONE
bombs(bomb);
userLuck(bomb, difficulty);