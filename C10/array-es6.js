var array = [9, -10, 5 ,2, -3 ,7];
var firstNegativeNumber = array.find ((number) => number < 0);
var firstNegativeNumberIndex = array.findIndex ((number) => number < 0);
console.log(firstNegativeNumber, firstNegativeNumberIndex);
// se opreste la primul care indeplineste condtitia


var sum = array.reduce((result, number) => result + number , 0);
console.log(sum);
// reduce merge prin  fiecare element si reduce intreaga lista la o sg valoare;
// 0 este valoarea de inceput pe care o ia rezultatul, initializare rezultat cu 0 => 0+ 9 = 9 ; 9+ (-10)= -1 ...etc

// cu reduce nu suntem obligati sa returnam un numar sau o bucata de text;

var doubleNumber = array.reduce((result, number) => {
    result.push(number*2);
    return result;
},[]);
console.log(doubleNumber);
// [] este valoarea de inceput la fel ca 0
// reduce functia generica care poate fi folosita in orice situatie...

var numbersA = [1, 2, 3, 4,];
var numbersB = [5, 6, 7];

console.log(numbersA.concat(numbersB));

console.log([...numbersA, ...numbersB]);

// spread este foarte simplu de extins fara a fi nevoie de a retine functii de concat.

console.log(numbersA.unshift(numbersB));
console.log ([...numbersB, ...numbersA]);

var obj1 = {hair:"red"};
var obj2 = {age:36};
console.log({...obj1, ...obj2});

var myFunction = (x,...y) => {
    // y is an array
    console.log(y);
    return x * y.length;
}
console.log(myFunction(5,"hello", 19, true,{key:9}, [1,2,3]));