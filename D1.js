/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/
let datatype1 = "undefined";
let datatype2 = "numero";
let datatype3 = "boolean";
let datatype4 = "null";

/* SCRIVI QUI LA TUA RISPOSTA */
console.log(
  "i principali datatype sono:",
  datatype1,
  datatype2,
  datatype3,
  datatype4
);

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/
let myName = "Giuseppe";
/* SCRIVI QUI LA TUA RISPOSTA */
console.log("il mio nome è", myName);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
let somma = 12 + 20;
/* SCRIVI QUI LA TUA RISPOSTA */
console.log("la somma di 12 + 20 è ", somma);
/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/
let x = 12;
/* SCRIVI QUI LA TUA RISPOSTA */
console.log("il valore di x è", x);
/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/
myName = "Giannì";
const Nome = "Giuseppe";

// Nome = "Giannì"  ERRORE

/* SCRIVI QUI LA TUA RISPOSTA */
console.log(myName, Nome);
/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
/* SCRIVI QUI LA TUA RISPOSTA */
console.log(x - 4);
console.log(4 - x);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/
let name1 = "john";
let name2 = "John";

/* SCRIVI QUI LA TUA RISPOSTA */
console.log(name1 === name2);

// if (name1 !== name2) {
//   console.log("true");
// }

console.log(name1 === name2.toLocaleLowerCase());
