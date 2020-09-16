// const prescurtare e la constant, nu are voie as isi schimbe valoarea, nu poate fi redeclarata = eroare
const a = 1;
//const a = 2; //error
//a = 2; error
//var a = 2; error


// let e intre const si var

let b = 2; 

// cu let nu putem redeclara variabile, dar
//let b = 3; //error
b = 3;


function varTest(){
    var x = 1;
if (true) {
    var x = 2;
    console.log(x); // 2;
}
console.log(x); // 2;
}
varTest();

function letTest(){
    let x = 1;
 if (true) {
    let x = 2;
    console.log(x); // 2;
 
}
console.log(x); // 1;
}
letTest(); // apelare functie ; 

// with var our x is the same in the whole function
// let actioneaza intr-un alt bloc de cod => x este diferit
// let si const exista la nivelui unei bucati de cod; ajuta sa protejam informatii globale; !! in interviuri!!

