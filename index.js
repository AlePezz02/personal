/* let A = 10;
const B = 10;

console.log(A + B);

let test = 5;
console.log(test = test + 1);


let number = 25
    { let number = 15;
    console.log(number)
}

let outside = 80
{
    let inside = 50
    console.log(outside, inside)
}
    console.log(outside, inside)
 */
/*  let i = 0;

 for (i ; i <= 20; i += 2){       //let i = 0; - La variabile i inizia da 0.
     console.log(i)               //i <= 20; - Il ciclo continua finché i è minore o uguale a 20.
 }                                //i += 2; - Dopo ogni iterazione, il valore di i aumenta di 2
*/
/* let start = 9

    while (start >= 1) {
        console.log(start)
        start -= 2;
    }
 */


/*     let word = prompt("parola");

    console.log(word.length)
 */


/*     let parola;

do {
    parola = prompt("Inserisci una parola di almeno 5 caratteri:");
} while (parola.length < 5);

console.log("Hai inserito:", parola); */

/* let number = 4

if (number > 5) {
    console.log("e maggiore di 5");
}else if (number < 5) {
    console.log("e minore di 5");
}
 */

/* let score = parseInt(prompt("Inserisci il tuo punteggio:"));

if (score >= 90 && score <= 100) {
    console.log("Voto ottimo");
} else if (score >= 70 && score <= 89) {
    console.log("Voto buono");
} else if (score >= 60 && score <= 69) {
    console.log("Voto sufficiente");
} else if (score <= 59) {
    console.log("Voto insufficiente");
} else {
    console.log("Valore non valido. Assicurati di inserire un numero.");
} */

/*     let number = 5;

    switch (number) {
        case 1:
         console.log("e minore di 5")
         break
        case 2:
         console.log("e minore di 5")
         break
        case 3:
         console.log("e minore di 5")
         break
        case 4:
         console.log("e minore di 5")
         break
        case 5:
         console.log("e pari di 5")
         break
        case 6:
         console.log("e maggiore di 5")
         break
         default:
         console.log("non valido");            
    }
 */


/* const array = [5, 10, 15, 20, 25];

let somma = 0;

for (let i = 0; i < array.length; i++) {
  somma += array[i];
}

console.log("La somma dei numeri contenuti nell'array è:", somma); */

/* const array = [5, 10, 15, 20, 25];

const arrayInvertito = [];

for (let i = array.length - 1; i >= 0; i--) {
  arrayInvertito.push(array[i]);
}

console.log("Array invertito:", arrayInvertito); */


const parole = [];

for (let i = 0; i < 5; i++) {
  const parola = prompt(`Inserisci la parola ${i + 1}:`); 
  parole.push(parola); 
}

console.log("Parole con un numero dispari di lettere:");
for (let i = 0; i < parole.length; i++) {
  if (parole[i].length % 2 !== 0) { 
    console.log(parole[i]); 
  }
}