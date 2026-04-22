function loadNews() {
//Istanzia un oggetto request
 const xhr = new XMLHttpRequest();
 //Definisce la risorsa (news.txt) da aprire sul server
 // e il metodo http (get) da usare per l’invio della
 richiesta
 xhr.open("get", "https://jsonplaceholder.typicode.com/posts/1");
 //Definisce una funzione callback
 //e effettua il controllo se la risposta è stata ricevuta
 interamente
 xhr.onload = function () {
 if (xhr.readyState === xhr.DONE) {
  if (xhr.status === 200) {
   document.getElementById("news").innerHTML = xhr.
   responseText;
    }
  }
}
//Invia la richiesta al server senza specificare dati (null)
xhr.send(null);
} 
