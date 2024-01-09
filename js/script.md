### Traccia

- chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero
- il prezzo del biglietto è definito in base ai km (0.21 € al km)  
- va applicato uno sconto del 20% per i minorenni  
- va applicato uno sconto del 40% per gli over 65  
- L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

### Svolgimento

1)  - chiedere numero di KM 
    - eliminare spazi
    - trasformare l'informazione da stringa a numero intero
    - salvare in una variabile
    - stampare in console o in pagina

2)  - chiedere età del passeggero
    - eliminare spazi
    - trasformare l'informazione da stringa a numero intero
    - salvare in una variabile
    - stampare in console o in pagina

3)  - calcolare il prezzo pieno moltiplicando i KM * 0.21
    - salvarla in una variabile

4)  - se l'età è <= 17:
        - calcolare il 20% di sconto (pScontato = (pTotale * 20) / 100)
        arrotondare la cifra ottenuta a 2 decimali
        - trasformarla in stringa
        - concatenarla con '€'
        - stampare in console o in pagina

5)  - altrimenti se l'età è >= 65:
        - calcolare il 40% di sconto (pScontato = (pTotale * 40) / 100)
        - arrotondare la cifra ottenuta a 2 decimali
        - trasformarla in stringa
        - concatenarla con '€'
        - stampare in console o in pagina

6)  - altrimenti:
        -  stampare il prezzo pieno in console o in pagina

### Casi limite / Gestione errori

#### Problema
utente inserisce qualcosa per cui parseInt da Nan
#### Soluzione
far apparire alert che dice che i dati non sono corretti

### Soluzione bonus
far apparire altro prompt che chiede subito inserimento dei dati corretti.

