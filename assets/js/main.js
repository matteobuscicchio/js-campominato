// Descrizione
// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// BONUS: (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 =>  tra 1 e 80
// con difficoltà 2 => tra 1 e 50
// Consigli del giorno:
// Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
// Ad esempio:
// Di cosa ho bisogno per generare i numeri?
// Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
// Proviamo prima con pochi numeri, inserire 86 numeri ogni volta potrebbe essere un po’ scocciante :wink:
// Le validazioni e i controlli possiamo farli anche in un secondo momento.
// Ricordatevi che se non sappiamo quante volte dobbiamo fare una cosa ci serve.




// SVOGLIMENTO
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

difficultyParameter();
bombs();
userLuck();