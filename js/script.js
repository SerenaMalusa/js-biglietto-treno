/* VARIABLES */
const title = document.getElementById('final-price');

/* creare variabile error = false 
let error = false; */

/*
    chiedere numero di KM 
    eliminare spazi
    trasformare l'informazione da stringa a numero intero
    salvare in una variabile
    stampare in console
*/
let kmCount = parseFloat(prompt('quanti km vuoi fare?').trim());
console.log('km', kmCount);

// se valore = Nan: chiedi nuovamente il valore
if ( isNaN(kmCount) ) {
    kmCount = parseInt(prompt('ATTENZIONE: valore inserito non valido! Per favore inserire un valore in cifre.').trim());
} 
console.log('km new', kmCount);
//console.log(error);

/*
    chiedere età del passeggero
    eliminare spazi
    trasformare l'informazione da stringa a numero intero
    salvare in una variabile
    stampare in console o in pagina
*/
let passengerAge = parseInt(prompt('quanti anni ha il passeggero?').trim());
console.log('età passeggero', passengerAge);

// se valore = Nan: chiedi nuovamente il valore
if ( isNaN(passengerAge) ) {
    passengerAge = parseInt(prompt('ATTENZIONE: valore inserito non valido! Per favore inserire un valore in cifre.').trim());
} 
console.log('age new', passengerAge);

/*
    calcolare il prezzo pieno moltiplicando i KM * 0.21
    salvarlo in una variabile
*/
const fullTicket = kmCount * 0.21;
console.log('full tiket price', fullTicket);

/* se non ci sono errori
    if (!error) { */

let discountPercentage = 0;

// se l'età è <= 17:
if (passengerAge <= 17) {

    discountPercentage = 20;

// altrimenti se l'età è >= 65:
} else if (passengerAge >= 65) {

    discountPercentage = 40;

// altrimenti:
} else {

    discountPercentage = 0;
}

// calcolare il 20% di sconto
let discountedTicket = fullTicket - ((fullTicket * discountPercentage) / 100); 
// trasformarla in stringa, concatenarla con '€'
let finalPrice = discountedTicket.toFixed(2).toString() + '€';
// stampare in console e in pagina
console.log('% di sconto', discountPercentage, 'prezzo intero', fullTicket, 'prezzo finale', finalPrice);
title.innerHTML =   `
                    km da percorrere: ${kmCount} <br />
                    prezzo intero: ${fullTicket.toFixed(2)} € <br />
                    età passeggero: ${passengerAge} <br />
                    % di sconto: ${discountPercentage} <br />
                    prezzo finale: ${finalPrice}                 
                    `


/* altrimenti
} else {


    alert: i dati inseriti non sono corretti
    stop

   alert('i dati inseriti non sono corretti');
} */