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
    #contatoreGenerale = 0;
    #contatoreAggiungiChilometri = 0;

    constructor(marca, modello, anno, chilometraggio = 0) {
        this.marca = marca;
        this.modello = modello;
        this.anno = anno;
        this.chilometraggio = chilometraggio;
    }

    descrizione() {
        this.#incrementaContatoreGenerale();
        return `Automobile: ${this.marca} ${this.modello}, Anno: ${this.anno}`;
    }

    aggiungiChilometri(km) {
        if (km > 0) {
            this.chilometraggio += km;
            this.#incrementaContatoreGenerale();
            this.#incrementaContatoreAggiungiChilometri();
            console.log(`Chilometraggio aumentato di ${km} km. Totale: ${this.chilometraggio} km.`);
        } else {
            console.log('Errore: I chilometri devono essere un valore positivo.');
        }
    }

    get chilometraggioAttuale() {
        return `Chilometraggio attuale: ${this.chilometraggio} km`;
    }

    set chilometraggioAttuale(nuovoChilometraggio) {
        if (nuovoChilometraggio >= this.chilometraggio) {
            this.chilometraggio = nuovoChilometraggio;
            console.log(`Chilometraggio aggiornato a ${this.chilometraggio} km.`);
        } else {
            console.log('Errore: Il nuovo chilometraggio non può essere inferiore a quello attuale.');
        }
    }

    #incrementaContatoreGenerale() {
        this.#contatoreGenerale++;
    }

    #incrementaContatoreAggiungiChilometri() {
        this.#contatoreAggiungiChilometri++;
    }

    mostraContatoreChiamate() {
        return `Metodi tracciati chiamati ${this.#contatoreGenerale} volte.`;
    }

    mostraContatoreChiamateAggiungiChilometri() {
        return `Il metodo 'aggiungiChilometri' chiamato ${this.#contatoreAggiungiChilometri} volte.`;
    }

    static verificaIstanza(obj, classe) {
        if (obj instanceof classe) {
            return `L'oggetto è un'istanza della classe ${classe.name}.`;
        } else {
            return `L'oggetto NON è un'istanza della classe ${classe.name}.`;
        }
    }
}

class Camion extends Automobile {
    constructor(marca, modello, anno, chilometraggio = 0, caricoMassimo = 0) {
        super(marca, modello, anno, chilometraggio);
        this.caricoMassimo = caricoMassimo; 
        this.caricoAttuale = 0; 
    }

    descrizione() {
        return `${super.descrizione()} | Carico massimo: ${this.caricoMassimo} kg | Carico attuale: ${this.caricoAttuale} kg`;
    }

    carica(kg) {
        if (kg > 0 && (this.caricoAttuale + kg) <= this.caricoMassimo) {
            this.caricoAttuale += kg;
            console.log(`Carico aggiunto: ${kg} kg. Carico totale: ${this.caricoAttuale} kg.`);
        } else if (kg <= 0) {
            console.log('Errore: Il peso del carico deve essere positivo.');
        } else {
            console.log(`Errore: Il carico totale (${this.caricoAttuale + kg} kg) supera il carico massimo (${this.caricoMassimo} kg).`);
        }
    }

    scarica() {
        console.log(`Carico scaricato: ${this.caricoAttuale} kg.`);
        this.caricoAttuale = 0;
    }
}

const miaAuto = new Automobile('Toyota', 'Corolla', 2020, 15000);
const mioCamion = new Camion('Scania', 'R500', 2022, 20000, 40000);

/* console.log(miaAuto.descrizione());
console.log(mioCamion.descrizione());

console.log(`miaAuto è un'istanza di Automobile?`, miaAuto instanceof Automobile); 
console.log(`mioCamion è un'istanza di Camion?`, mioCamion instanceof Camion); 
console.log(`mioCamion è un'istanza di Automobile?`, mioCamion instanceof Automobile); 
 */
/* console.log(Automobile.verificaIstanza(miaAuto, Automobile)); 
console.log(Automobile.verificaIstanza(mioCamion, Camion)); 
console.log(Automobile.verificaIstanza(mioCamion, Automobile)); 
console.log(Automobile.verificaIstanza(miaAuto, Camion)); 
 */


/* Crea un array chiamato numbers contenente i numeri da 1 a 5.
 Usa forEach per stampare ogni numero moltiplicato per 2. Usa map per creare un nuovo array squaredNumbers contenente i quadrati di ogni numero in numbers.
  Stampa il nuovo array squaredNumbers sulla console.
 */

/*   const numbers = [1,2,3,4,5]

  numbers.forEach(element => {
    console.log(element * 2)
});

let squaredNumbers = numbers.map(numbers => {
    return numbers ** 2
})
    console.log(squaredNumbers)
 */


/*     let lista = [1,2,3,4,]

    let [primo, secondo, terzo, quarto, quinto = 0] = lista

    console.log(primo) 
    console.log(secondo)
    console.log(terzo)   
    console.log(quarto)
    console.log(quinto) 
 */


/*      const persona = {
        nome: "Giulia",
        professione: "Designer"
      }
      
      const { nome, età = 25, professione, città = "Milano" } = persona
      
      console.log(nome)      
      console.log(età)       
      console.log(professione)
      console.log(città)       
 


      let lista = [1,2,3,4,]

      let listaCopia = [...lista]

      console.log(lista)
      console.log(listaCopia)
 



 
      let lista1 = [1,2,3,4,5,6]
      let lista2 = [7,8,9,10,11]

      let listaCompleta = [...lista1 , ...lista2]

      console.log(listaCompleta)

 */ 


/*       let object = {
        nome: 'mario',
      }

      let objectCopia = {...object, age:'16'}


      console.log(object)
      console.log(objectCopia)

      let frutti = ['mela' , 'pera', 'banana', 'kiwi'];

      let [first, second, ...rest] = frutti

      console.log(rest) */

const numeri = [10, 20, 30, 40, 50];

const [primo, secondo, ...resto] = numeri;

console.log("Primo:", primo);        
console.log("Secondo:", secondo);    
console.log("Resto:", resto);
        
