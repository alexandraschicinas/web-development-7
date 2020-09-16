function sum(a,b,c){
    return a + b + c;
}
console.log(sum(3,5,7));

//arrow functions = functii anonime => "the short hand of a function"

var sum = (a, b ,c) => a + b + c;
console.log(sum(3, 5, 7));

var sun = (a,b,c) => {
    return a + b + c;
}
console.log(sum(3, 5, 7));

var sum10 = (a) => a + 10;
console.log(sum10(5));

var numbers = [1,3,5,8,20];
// nr divizibile cu 5
var numbersMultipleOfFive = numbers.filter(function(number){
    if (number% 5 === 0){
    return true;
    } else {
        return false;
    };
});
console.log(numbersMultipleOfFive);

var numbersMultiplyOfFive1 = numbers.filter((number)=> number % 5 === 0); 
console.log(numbersMultiplyOfFive1);

//Templetate-String

var twoLinesText = `This is a really long text that has one line 
and here we have another line.`;
 console.log(twoLinesText);

 //`back tilds` in loc de /n pt a putea pune textul pe 2 linii.

 var name = "Bob", 
    time = "today";

    console.log(`Hello ${name}, how are you ${time}.`);

    

