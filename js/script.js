// Mail
// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

// Array Lista utenti di chi può accedere
// var listaUtenti = ["pippo@gmail.com", "pluto@gmail.com", "paperino@gmail.com", "topolino@gmail.com"];
// console.log('lista utenti:', listaUtenti);

// // Chiedi all’utente la sua email 
// var mailUtente = prompt("Ciao, inserisci la tua email");

// // Controllare se l'utente fa parte della lista
// // ho bisogno della mail dell'utente (mailUtente) 
// // ho bisogno della lista (listaUtenti) 
// // devo confrontare la mail utente con la lista e trovare un risultato, salvo il risultato in una variabile vuota che poi andrò a popolare

// var risultatoConfronto = false;

// for (var i = 0; i < listaUtenti.length; i++) {
    
//     if (risultatoConfronto == false) {

//         // mail controllata in questo momento del ciclo 
//         var thisEmail = listaUtenti[i];
//         console.log(listaUtenti[i]);
//         console.log("valore prima del controllo", risultatoConfronto);

//         // poi il ciclo confronta la mail utente con quella controllata
//         if (thisEmail == mailUtente) {
//             risultatoConfronto = true;
//             console.log("abbiamo cambiato valore di risultatoConfronto e l'abbiamo messo a true");
            
//         }
//         console.log("valore dopo il controllo", risultatoConfronto);
//     }

// }

// if (risultatoConfronto) {

//     alert('abbiamo trovato');

// } else {

//     alert('non abbiamo trovato');
// }


// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.

// assegno numero random al giocatore 
var numeroGiocatore = Math.floor(Math.random() * (6 - 1 + 1) + 1);
alert("il tuo numero è: " + numeroGiocatore);

// assegno numero random al computer
var numeroComputer = Math.floor(Math.random() * (6 - 1 + 1) + 1);
alert("numero computer è: " + numeroComputer);

// stabilisco il vincitore in base al numero più alto 
if (numeroGiocatore > numeroComputer) {
    alert("giocatore ha vinto");
} else if (numeroGiocatore < numeroComputer) {
    alert("giocatore ha perso");
} else {
    alert("pari!");
}