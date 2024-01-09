// creare variabile error = false 
let error = false;

/*
    chiedere numero di KM 
    eliminare spazi
    trasformare l'informazione da stringa a numero intero
    salvare in una variabile
    stampare in console
*/
const kmCount = parseInt(prompt('quanti km vuoi fare?').trim());
console.log('km', kmCount);

// se valore = Nan: error = true
if (!kmCount) {
    error = true;
}
console.log(error);

/*
    chiedere età del passeggero
    eliminare spazi
    trasformare l'informazione da stringa a numero intero
    salvare in una variabile
    stampare in console o in pagina
*/
const passengerAge = parseInt(prompt('quanti anni ha il passeggero?').trim());
console.log('età passeggero', passengerAge);

// se valore = Nan: error = true
if (!passengerAge) {
    error = true;
}
console.log(error);

/*
    calcolare il prezzo pieno moltiplicando i KM * 0.21
    salvarlo in una variabile
*/
const fullTicket = kmCount * 0.21;
console.log('full tiket price', fullTicket);

// se error = true: 
if (error) {
    /*
        alert: i dati inseriti non sono corretti
        stop
    */
    alert('i dati inseriti non sono corretti');

// altrimenti
} else {

    // se l'età è <= 17:
    if (passengerAge <= 17) {

        // calcolare il 20% di sconto
        let discountedTicket = (fullTicket * 20) / 100; 
        console.log('sconto 20 x minorenni', discountedTicket);
        // trasformarla in stringa, concatenarla con '€'
        let finalPrice = discountedTicket.toFixed(2).toString() + '€';
        // stampare in console o in pagina
        console.log('prezzo finale', finalPrice);

    // altrimenti se l'età è >= 65:
    } else if (passengerAge >= 65) {

        // calcolare il 40% di sconto
        let discountedTicket = (fullTicket * 40) / 100; 
        console.log('sconto 40 x ultra65enni', discountedTicket);
        // trasformarla in stringa, concatenarla con '€'
        let finalPrice = discountedTicket.toFixed(2).toString() + '€';
        // stampare in console o in pagina
        console.log('prezzo finale', finalPrice);
    
    // altrimenti:
    } else {

        // prendere il prezzo pieno, trasformarla in stringa, concatenarla con '€'
        let finalPrice = fullTicket.toFixed(2).toString() + '€';
        // stampare in console o in pagina
        console.log('prezzo finale', finalPrice);
    }
}