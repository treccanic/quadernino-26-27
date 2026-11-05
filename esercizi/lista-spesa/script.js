// TODO:
// 1. Al click su "Aggiungi" (o premendo Invio) aggiungi un elemento alla lista
//    con il testo inserito nell'input.
// 2. Ogni elemento deve avere un bottone "Rimuovi" che lo elimina dalla lista.
// 3. Se l'input è vuoto, mostra un messaggio di errore e non aggiungere nulla.
// 4. (Bonus) Al click sul testo dell'elemento, barralo come "fatto".

const btn = document.getElementById("btn-aggiungi");
const input = document.getElementById("item");
const lista = document.getElementById("lista");

function aggiungi(){
    const nuovoItem = document.createElement("li");
    nuovoItem.textContent = input.value;

    const bottoneRimuovi = document.createElement("button");
    bottoneRimuovi.textContent = "X";
    nuovoItem.append(bottoneRimuovi);

    bottoneRimuovi.addEventListener("click")




    lista.append(nuovoItem);
    input.value = null;



}
btn.addEventListener("click", aggiungi);