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

// comparazione
// function numberChecker() {}

// numeri random
numberArray = [];

while(numberArray.length < 16){

    var randomNumber = Math.floor(Math.random() * 100) + 1; //sostituisci  20 con 100

    if (numberArray.indexOf(randomNumber) === -1) {
        numberArray.push(randomNumber)
    }
    randomCpNumber = numberArray.sort();
}
console.log(randomCpNumber);

// scelta numero utente
userNumberArray = [];
while(userNumberArray.length < 20-16) {
    
    userNumber = Number(prompt('inserisci un numero'));

    if (userNumber === 0) {
        alert('il numero zero non è ammesso, scegline uno nuovo')
    } else if (userNumber > 100) {
        alert('questo numero non è ammesso, scegline uno nuovo')
    } else if (userNumberArray.indexOf(userNumber) !== -1) {
        alert('hai già inserito questo numero, scegline uno nuovo')
    } else {
        userNumberArray.push(userNumber);
    }
    orderedUserNumber = userNumberArray.sort();
}
console.log(orderedUserNumber);

