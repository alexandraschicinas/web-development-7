// operatorii ajuta sa mutam datele in stanga dreapta fie sa le schimbam;
//Arithmatic operators
var a =5; // egalul - are rolul de a asigna o valoare
var b = 3;
var c = a + b;
// + este alt operator
console.log(c);

var d = a - b;
console.log(d);

var r = a * b;
console.log(r);

var f = a / b;
console.log(f);

var g = a % b;
console.log(g); // afiseaza restul impartirii 5 la 3;

var h = 10; //operator de incrementare- adaugi o singura valoare la o valoare existenta;
h++; // h= h+1 or h+=1; asa se poate mai scrie;
console.log(h);

//string operators

// ne lasa sa concatenam bucati de text, lipim 2 sau mai multe bucati de text una de cealalta;

var firstName = "Cosmin";
var lastName = "Pruteanu";
var fullName = firstName + " " + lastName;
console.log(fullName);

//logica Booleana - comparison operators - folositi pentru a face comparatii; vor oferi o valoare de adevarat sau fals

a = 10;
b = 7;
console.log(a < b) //false
console.log(a > b); //true
console.log(a >= 10); // a is equal or bigger than 10; true;
console.log(a == b); // un singur egal este operant de asignare; == testam daca o variabila este egala cu alta; a is equal to b;false
console.log (a == "10"); //true - este egal ca text! un nr nu poate fi egal cu un text
console.log (a === "10"); // false- === verifica si sa fie de acelasi tip. textul nu este egal cu un numar! cel mai recomandat pt egalitate;
console.log (a !== b ); // "!" este operandul de negatie, verifica si tipul, daca era doar un = nu verifica tipul;

// Logical operators - lucreaza cu valori de adevarat sau fals;

var i= false;//- se initializeaza
// i=true - se reasigneaza;
console.log( !i ); 
console.log(true && true && false) // true and true => true; daca apare o afirmatie falsa => va fi fals indiferent cate valori de adevar sunt

// operatorul sau nu este asa restrictiv; daca exista un adevar intre mai multe afirmatii false , tot adevarate raman
console.log( true || true || false); // true



