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


/* const parole = [];

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
 */
/* const person = {
    name : "Gianni",
    age : "19",
    city : "Massafra"
}
/* console.log(person)
console.log(person.age)

person.age = 25

console.log(person.age)

person.job = "Developer"
console.log(person)
 */
/* for (const proprietà in person) {
    console.log(`Proprietà: ${proprietà}, Valore: ${person[proprietà]}`);
}
 */


/* The Addition (+) Operator
The Subtraction (-) Operator
The Multiplication (*) Operator
The Division (/) Operator
The Exponentiation (**) Operator
The Remainder (%) Operator
The Increment (++) Operator
The Decrement (--) Operator */


/* function createCounter(){
    let count = 9
    return {
        increment:function(){
            count += 1
            return count

        },
        decrement:function(){
            count -= 1
            return count

        }
    }
}
const counter = createCounter()
    console.log(counter.increment())
    console.log(counter.decrement())

    let student = {
        name:"Gianni",
        age:"71",
        grade:"Veteran",
        school:"Charlton"
    }
 *//*     const keys = Object.keys(student);
   console.log(student)
   console.log(keys)

   const keysValue = Object.values(student)
   console.log(keysValue)
*/
/*     const keysEntr = Object.entries(student)
    console.log(keysEntr)
 */
/*     let numbers = [1, 2, 3, 4, 5];

    numbers.forEach(number => {
        console.log(number * 2);
    });
    
    const squaredNumbers = numbers.map(number => number ** 2);
    
    console.log(squaredNumbers); */


/* let students = [{
    name: "mario",
    grade: 50
},
{
    name: "gianni",
    grade: 65
},
{
    name: "ale",
    grade: 58
},
]

let passedStudent = students.filter((student)=>{
    return student.grade > 60;
});

let noPassedStudent = students.find((student)=>{
    return student.grade < 60;
})

console.log(passedStudent)
console.log(noPassedStudent) */

/* const expenses = [120, 45, 300, 78, 150];

const totalExpenses = expenses.reduce((total, expense) => total + expense, 0);

const words = ["banana", "apple", "cherry", "date"];

words.sort();

console.log("Somma totale delle spese:", totalExpenses);
console.log("Array di parole ordinate:", words);
 */

class Automobile {
    #contatoreChiamate = 0;

    constructor(marca, modello, anno, chilometraggio = 0) {
        this.marca = marca;
        this.modello = modello;
        this.anno = anno;
        this.chilometraggio = chilometraggio;
    }

    descrizione() {
        this.#incrementaContatore();
        return `Automobile: ${this.marca} ${this.modello}, Anno: ${this.anno}`;
    }

    aggiungiChilometri(km) {
        if (km > 0) {
            this.chilometraggio += km;
            console.log(`Chilometraggio aumentato di ${km} km. Chilometraggio totale: ${this.chilometraggio} km.`);
        } else {
            console.log('Errore: I chilometri aggiunti devono essere un valore positivo.');
        }
    }

    mostraChilometraggio() {
        return `Chilometraggio attuale: ${this.chilometraggio} km`;
    }

    #incrementaContatore() {
        this.#contatoreChiamate++;
    }

    mostraContatoreChiamate() {
        return `Il metodo 'descrizione' è stato chiamato ${this.#contatoreChiamate} volte.`;
    }
}

const miaAuto = new Automobile('Toyota', 'Corolla', 2020);

console.log(miaAuto.descrizione());
console.log(miaAuto.descrizione());
console.log(miaAuto.descrizione());

console.log(miaAuto.mostraContatoreChiamate());
