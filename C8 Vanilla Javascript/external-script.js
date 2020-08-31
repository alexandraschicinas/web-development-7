/*document.getElementById("demo").innerHTML = "Hello Javascript";
alert("Hello world"); 
document.write("I wrote the html document");
console.log("My first log");
*/    
// statements- le executa calculatorul linie cu linie

var a = 2;
// var= declaram/construim a care sa aiba valoarea 2
var b = 8;
var c = a+b;
//aritmetic statement
console.log(c);
// consola este o unelta pentru debugging - un developer isi da seama unde exista prb in program
// sintactic- cod corect, dar functional nu mergea pt ca nu se gasea demo cand este in head
// in css vedem in inspect body, margin...etc
// in js scriem cod in consola
// variabilele sunt lucrurile pe care le folosim pt a pune informatii in ele
// variabilele contin informatia pe care noi o adaugam
// cu variabile putem constui instructiuni mai complexe combinand-ule
// variabile de tip number
var numberVariable = 20;
//in js data types- numere intregi= integers
var integerNumber = 17;
// in js nr cu virgula- floating numbers
var floatNumber= 2.5;
// - inseamna minus, nu se poate folosi altfel
// numele de variabile nu se incepe cu numere, doar litere; se poate incepe cu $/litere
// se poate scrie fie cu litere mari fie mici sau camele case- conventie intre programatori
// atentie var FloatNumber nu e acelasi lucru cu var floatNumber - atentie js e case sensitive!

//String

var name = "Cosmin";
// name- a da valoare, daca e de tip text se pune intre"""

var middleName = 'C';

// se poate folosi si apostrof- cand e o litera/caracter

//Boolean

var isEngineStarted = true;
//true or false - key words, cuvinte rezervate

// Arrays - liste, => numbers la plural, nu sunt primitive

var numbers = [1,2,3,5] // se pot scrie orice tip de date separate cu virgula in parantee drepte
console.log(numbers);

//Objects - sunt folosite ca sa reprezentam lucruri cu mai multe proprietati - js trebuie definite proprietatile; nu sunt primnitive
var car ={
    type:"BMV",
    model:"X5",
    color:"black",
    wheels:"4",
};
console.log(car.model)
// accesam o proprietate
//aceste proprietati se pot folosi si in alte limbaje de programare
// mai sunt 2 tipuri de date care pot incurca sau ajuta, specifice pt JS

//Undefined
var user="Cosmin";
console.log(user);
user= undefined;
console.log(user);
// undefined- empty value, nu are nimic asignat"a da valoare"; putem si goli o proprietate cu "= undefined'
// putem sa dam ale valori sau le putem reseta fara a mai scrie var de fiecare data; prima data initializam o valoare cu var, iar ulterior putem reasigna o valoare fara var

//Null - exista si in alte limbaje de programare, e diferit de undefined
var email = null;
