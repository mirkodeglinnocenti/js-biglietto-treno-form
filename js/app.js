// console.log('ciao');

const PREZZO_PER_KM = 0.21


// click sul pulsante, calcola il prezzo del biglietto

// bottone
const buttonEl = document.getElementById('calcola')
// console.log(buttonEl)

// distanza
const inputDistamzaEl = document.getElementById('distanza')

// seleziona sconto
const selectEl = document.getElementById('sconto')

// Output risultato
const risultatoElement = document.getElementById('risultato')

buttonEl.addEventListener('click' , function() {

    console.log('click pulsante')

    // prendiamo il valore dei km
    let km = inputDistamzaEl.value
    let kmNumber = parseInt(km)

    let prezzoBase = kmNumber * PREZZO_PER_KM
    console.log('prezzo base' , prezzoBase)

    // sconto
    
    let sconto = 0
    
    console.log(selectEl)
    const scontoSelezionato = selectEl.value
    console.log(scontoSelezionato, typeof scontoSelezionato)

    // sconto in base alla selezione
    if(scontoSelezionato === 'young') {
        sconto = prezzoBase * 0.2;
    } else if (scontoSelezionato === 'old') {
        sconto = prezzoBase * 0.4;
    } else if (scontoSelezionato === '')
        sconto = 0;

    // Prezzo finale
   

    const prezzoFinale = prezzoBase - sconto

    console.log(prezzoBase, sconto, prezzoFinale)

    risultatoElement.innerHTML = prezzoFinale.toFixed(2) + ' euro'
})


