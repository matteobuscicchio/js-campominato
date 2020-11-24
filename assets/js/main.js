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
function difficultyParameter() {
    difficultyArray = [];
    var difficultyArray = Number(prompt('scegli la difficoltà; digita 0 per scegliere facile, 1 per medio e 2 per difficile'));
    var index=0;
    while (index < 1) {
        if (difficultyArray == 0) {
            bomb = 100;
            difficulty = 84;
            console.log(difficulty);
            break;
        }
        if (difficultyArray == 1) {
            bomb = 80;
            difficulty = 64;
            console.log(difficulty);
            break;
        }
        if (difficultyArray == 2) {
            bomb = 50;
            difficulty = 34;
            console.log(difficulty);
            break;
        }
        index++;
    }
    return difficulty;
}
// numeri random
function bombs() {
    var numberArray = [];
    while(numberArray.length < 16){
        var randomNumber = Math.floor(Math.random() * 100) + 1;
        if (numberArray.indexOf(randomNumber) === -1) {
            numberArray.push(randomNumber)
        }
    }
    oderedCpNumber = numberArray.sort();
    // console.log(oderedCpNumber);
    return oderedCpNumber;
}
// scelta numero utente
function userLuck() {
    userNumberArray = [];
    while(userNumberArray.length < difficulty ) {
        userNumber = Number(prompt('inserisci un numero'));
        if (checker(oderedCpNumber, userNumber)) {
            alert('Spiacente, hai perso. Con un punteggio pari a ' + userNumberArray.length);
            break;
        }
        if (userNumber === 0) {
            alert('il numero zero non è ammesso, scegline uno nuovo')
        } else if (userNumber > 100) {
            alert('questo numero non è ammesso, scegline uno nuovo')
        } else if (userNumberArray.indexOf(userNumber) !== -1) {
            alert('hai già inserito questo numero, scegline uno nuovo')
        } else {
            userNumberArray.push(userNumber);
        }
    }
    if (userNumberArray.length == difficulty) {
        alert('Complimenti, hai vinto. Hai dato '+ userNumberArray.length + ' risposte esatte consecutivamente. Il tuo puntegio finale è ' + bomb);
    }
}
//ESECUZIONE
difficultyParameter();
bombs();
userLuck();