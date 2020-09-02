var numbers = [1,2,3,4,5];
console.log(numbers);
// afisam doar 2 prin notarea pozitiei pe care se afla,; developerii incep numaratoarea de la 0.

console.log(numbers[1]);

// iterare elemente:

for (var index = 0; index < numbers.length; index ++){
    console.log(numbers[index]);
}
//indexul este pozitia dintr-o lista;
//for cuvant rezervat cu care putem itera/executa o bucata de cod atata timp cat o conditie este indeplinita; for este o functie
// inauntrul parantezelor este o indicatie var  index = 0 inseamna ca spunem de unde sa incepem; index< numbers= daca index este mai mic strict decat numbers.length = lungimea listei;
// index ++ ne ajuta sa evitam sa crape pagina, adica sa nu se execute pana la infinit, astfel ii spunem ce se intampla dupa ce a executat toate liniile de cod, deci forul executa incrementarea variabilei index

//accesam o pozitie care nu exista in lista:

console.log(numbers[10]);

//orice pozitie folosim si nu e in lista obtinem undefined.

numbers.forEach(function(number){
    console.log(number);
})
//pentru fiecare element din numbers vom vrea sa executam aceasta functie - function va primi un parametru number si inauntru console.log punem numbers.
// forEach este mai restrictiv, nu se termina decat cand ajunge la finalul listei; cealalta exprimare ne lasa sa punem conditii;

//adaugam elemente in lista

numbers.push(6);
console.log(numbers);

//adaugam elemente la inceputul listei

numbers.unshift(-2);

console.log(numbers);

// schimbarea valoarea dintr-o lista - update an item from an array

numbers[2] = "two";
console.log(numbers);

//stergem elemente din lista - splice primeste 2 elemente - pozitia/indexul si cate vrei sa stergi de la pozitia aia

numbers.splice(2,1);
console.log(numbers);

//listele au propriile lor functii, de aceea se scriu simplificat si nu clasic function smth(){ } smth();
// numele listei da locatia in care se intampla functia

//filtrare elemente

var oddNumbers = numbers.filter(function(number){
    if (number % 2 !== 0){
        return true;
    } else {
        return false;
    }
})
console.log(oddNumbers);

//mapare liste- transformare liste- ex dublare elemente

var doubledNumbers = numbers.map(function(number){
    return number *2;
})

console.log(doubledNumbers);

// in programare maparea inseamna transformare map=transform
// vrem ca pe fiecare element din numbers sa il mapam folosind urmatoarea functie... va merge unul care unul si pt diecare element va returna *2, neschimbandu-si pozitia;

//sortare elemente bazat pe conditii

var randomNumbers = [7,3,8,1,34,-12,-98,4,7];

randomNumbers.sort(function(firstElement, secondElement){
    if (firstElement < secondElement){
        return -1

    }
    if (firstElement > secondElement){
        return 1;
    }
    if (firstElement === secondElement){
        return 0;
    }
})
console.log(randomNumbers);
//sortarea sortul ca sa tine minte relatia dintre elemente se foloseste de returnurile scrise, dupa ce parcurge toate elementele bazate pe returnuri, va stii in ce modalitate sa pun elemente din lista;
// ca sa schimbam ordinea sortarii de schimba cu mai mare > prima conditie
// se poate sorta si in ordine alfabetica 

// 1. Write a function that takes a list of names and returns another list with names that have more than 4 characters.

// cand un enunt zice ca functia primeste ceva - ce punem in interiorul () - acel parametru

function filterNames(names) {
    return names.filter(function (name){
        if (name.length > 4){
            return true;
        } else {
            return false;
        }
    }) // definim functia
}
var names = ["Ana", "Andrei", "Victor", "Geanina", "Irina", "Dana", "Mihai", "Ian", "Ina"]; //definim lista
var longNames = filterNames(names); //invocam lista, adica punem rezultatul filtrarii intr-o variabila pe care sa o afiseze;
console.log (longNames);

////nr loto

function generateWinningLotteryNumbers(numberOfResults, results){
    // 6 numere
    //conditie de oprire, functii recursive- 
    if (numberOfResults > 5){
        return; // iesim mai rpd dintr-o functie
    }
    var number = Math.floor(Math.random()* 49) + 1; // poate genera si 0, deci se face +1

    var isNumberInResults = false; // scopul variabilei este sa tinem minte daca nr generat exista deja in lista sau nu; este fals pentru ca daca e nu este nici un duplicat avem nr nou si se adauga in lista de rezultate;

    for (var index = 0; index < results.lenght; index++) {
        if (results[index] === number ){
            isNumberInResults = True;
        }
    }
    if (isNumberInResults === false) {
        results.push(number);
        generateWinningLotteryNumbers(numberOfResults + 1, results);

    } else {
        generateWinningLotteryNumbers(numberOfResults, results)
    }
    return results;
}
 console.log(generateWinningLotteryNumbers(0,[]));