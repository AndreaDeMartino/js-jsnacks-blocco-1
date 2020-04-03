// Snack 1: L’utente inserisce due parole in successione, con due prompt. Il software stampa la parola più lunga. Utilizza una funzione per determinare e ritornare la parola più lunga.

console.log('*** SNACK 1 ***');

var usrWord1 = prompt('Inserisci la prima parola');
var usrWord2 = prompt('Inserisci la seconda parola');

console.log('La parola più lunga è: ' + longWord (usrWord1,usrWord2));


function longWord (firstWord,secondWord){
  
  if ( firstWord.length > secondWord.length ){
    return firstWord;
  } else if ( secondWord.length > firstWord.length ){
    return secondWord;
  }
  else{
    return 'Attenzione, le parole sono uguali';
  } 
}

// Snack 2: Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo

console.log('*** SNACK 2 ***');

var numero = parseInt(prompt('Inserisci un numero'));

console.log(exercise(numero));

function exercise (element){
if (element % 2 == 0){
  return element;
} 
  return (element + 1);
}

// Snack 3: Generatore di “nomi cognomi” casuali: prendendo una lista di nomi (‘Michele’, ‘Fabio’, ‘Roberto’) e una lista di cognomi (‘Forghieri’, ‘Papagni’, ‘Marazzini’), Gatsby vuole generare una falsa lista di 5 invitati.

console.log('*** SNACK 3 ***');

var names = ['Michele', 'Fabio', 'Roberto'];
var lastNames = ['Forghieri', 'Papagni', 'Marazzini'];

console.log( random(names,lastNames));

function random (mylist1,mylist2){
  var randomArray = [];
  for (i = 0; i < 5; i++){
    var randomIndex1 = Math.floor( Math.random() * ((mylist1.length - 1) - 0 + 1) + 0);
    var randomIndex2 = Math.floor( Math.random() * ((mylist1.length - 1) - 0 + 1) + 0);
    randomArray.push(mylist1[randomIndex1] + ' ' + mylist2[randomIndex2]);
}

  return randomArray;
}

// JSnack Bonus (non visto insieme e quindi assolutamente facoltativo)
// Crea un array di numeri interi, ad esempio (1, 4, 2, 15, 120, 17, 3) e fai la somma di tutti gli elementi che sono in posizione dispari. Prova prima senza funzione e poi con funzione.


console.log('*** SNACK 4 ***');

var names = ['1', '4', '2' , '15', '120', '17', '3'];

console.log('La somma degli elementi in posizione dispari (partendo da 0) è: ' + dispari (names));

function dispari (array){
  var somma = 0;
  for (i = 0; i < array.length - 1; i++){
    if (i % 2 !== 0){
      somma += parseInt(array[i]);
    }
  }
  return somma;
}


