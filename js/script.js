// Array Lista utenti di chi può accedere
var listaUtenti = ["pippo@gmail.com", "pluto@gmail.com", "paperino@gmail.com", "topolino@gmail.com"];
console.log('lista utenti:', listaUtenti);

// Chiedi all’utente la sua email 
var mailUtente = prompt("Ciao, inserisci la tua email");

// Controllare se l'utente fa parte della lista
for (var i = 0; i < listaUtenti.length; i++) {
    var utenteIncluso = listaUtenti[i];
    
    console.log('utente incluso:', utenteIncluso);

    if (mailUtente == utenteIncluso) {
        alert("Perfetto " + mailUtente + " puoi giocare!")
    }
}