// Array Lista utenti di chi può accedere
var listaUtenti = ["pippo@gmail.com", "pluto@gmail.com", "paperino@gmail.com", "topolino@gmail.com"];
console.log(listaUtenti);


// Chiedi all’utente la sua email 
var mailUtente = prompt("Ciao, inserisci la tua email");
console.log(mailUtente);


// Controllare se l'utente fa parte della lista
for (var i = 0; i < listaUtenti.length; i++) {
    var mail = listaUtenti[i];

    console.log(mail);
}




