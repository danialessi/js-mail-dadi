// Mail
// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

// Array Lista utenti di chi può accedere
var listaUtenti = ["pippo@gmail.com", "pluto@gmail.com", "paperino@gmail.com", "topolino@gmail.com"];
console.log('lista utenti:', listaUtenti);

// Chiedi all’utente la sua email 
var mailUtente = prompt("Ciao, inserisci la tua email");

// Controllare se l'utente fa parte della lista
// ho bisogno della mail dell'utente (mailUtente) 
// ho bisogno della lista (listaUtenti) 
// devo confrontare la mail utente con la lista e trovare un risultato, salvo il risultato in una variabile vuota che poi andrò a popolare

for (var i = 0; i < listaUtenti.length; i++) {

    var risultatoConfronto = false;

    // mail controllata in questo momento del ciclo 
    var thisEmail = listaUtenti[i];
    // console.log(listaUtenti[i])

    // poi il ciclo confronta la mail utente con quella controllata
    if (thisEmail == mailUtente) {
        risultatoConfronto = true;
        alert("perfetto, puoi entrare");
    } else {
        alert("spiacente non sei nella lista");
    }
}


// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
