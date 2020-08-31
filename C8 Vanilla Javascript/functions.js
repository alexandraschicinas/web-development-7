// functiile sunt un concept si o unealta pe care o putem folosi sa scriem cod reutilizabil, sa nu fie nevoie sa ne repetam;
function sum(a,b){
    var c = a + b;
    return c;
}
var x = sum(10,5);
console.log(x); // 15
//chemam functia, o invocam, o executam;
// function= numele functiei, intre paranteze rotunde se afla lista de argumente/paramentrii
// undefined apare cand functia nu ofera nimic inapoi, un rezultat, raspuns - trebuie sa ofera rasp locului unde a fost executata, chemata => adaugam return c;
console.log(sum(20,30)); //50
// putem scrie orice in loc de sum ca tot suma va face

function isNumberEven(number) {
    var isEven = number % 2;
    
    if(isEven === 0) {
        console.log("The number " + number + "is even");
    } else {
        console.log("The number " + number + " is odd") ;
    }
    return isEven === 0; //true or false;

}
console.log(isNumberEven(4));
    // par sau impar daca se imparte la 2 este 0 sau nu
    // ca sa testam sa vedem daca e impar sau par;
    // if / else conditional statements
            // IF-URILE TOT TIMPUL VERICA DACA E ADEVARAT SAU FALSE, NU VALOARE, TREBUIE SA FIE CEVA CARE RETURNEAZA ADEVARAT SAU FALSE
    // mai trebuie executata, invocata;

console.log(Math.floor(4.6)); // floor rogunjeste in jos un nr cu virgula 4
console.log(Math.pow(2,5)); // 32
console.log(Math.min(2,10, 124, 12,1,-5, 2521,7)); // cel mai pic element din sir
console.log(Math.random()); // se genereaza nr random intre cele mentionate.

var number1 = Math.floor(Math.random() * 49);
console.log(number1);

var number2 = Math.floor(Math.random() * 49);
console.log(number2);

var number3 = Math.floor(Math.random() * 49);
console.log(number3);

var number4 = Math.floor(Math.random() * 49);
console.log(number4);

var number5 = Math.floor(Math.random() * 49);
console.log(number5);

var number6 = Math.floor(Math.random() * 49);
console.log(number6);

//sau console.log( number1, number2, number3, number4, number5, number6);
//cum transformam 7 linii intr-o singura functie
//recursivitate

function generateWinningLotteryNumbers(numberOfResults){
    // 6 numere
    //conditie de oprire, functii recursive- 
    if (numberOfResults > 6){
        return; // iesim mai rpd dintr-o functie
    }
    var number = Math.floor(Math.random()* 49);
    console.log("LOTTERY NUMBER ", number);
    generateWinningLotteryNumbers(numberOfResults + 1); // invocare functiei in care se afla;
}
generateWinningLotteryNumbers(1);

var n = new Date().getHour();
console.log(n);
