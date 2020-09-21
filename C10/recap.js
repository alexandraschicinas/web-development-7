console.log("i'm another script.");

//Declaring variables

var a = 5;
console.log(a);

a = 8;
console.log(a);

var b =10;
var c = a + b;

console.log("c=", c);

//Data Types

var x = 10;
var y = 1.5;
var z = "John";
var w = true;

var list = [1, 2, 3, 4 ,5]
var three = list [2];


var person = {
    age: 30,
    hairColor: "#0000",
    eat: function(){
        console.log("I'm eating food.")
    }

}

console.log(person.age);
person.eat("Sandwich");

//functions

function multiply (a,b) {
    return a*b

}
console.log(multiply( 12, 6));
//valoare returnata

var j = multiply(123,14);
console.log(j);

// valoarea unei functii intr-o variabila => poate fi folosita la mai multe functii

console.log( j, 100);
// we need b to different from 0.

function divide (a , b) {
    if (b !== 0){
        return a / b;

    } else {
        throw new ERROR ("You can't divide with 0.");
            // "aruncam erori" si exceptii de caz
    }
}

console.log(divide(12,6));
// la impartire trebuie si alta regula cand e impartirea la 0 => conditie