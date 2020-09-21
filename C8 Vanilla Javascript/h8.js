function sayHello(){
var n = new Date().getHours();
if (n < 12) {
    console.log("Good morning", n);
} else if ( n> 12 || n< 18) {
    console.log("Good afternoon", n) ;
} else if ( Number (n) > 18) {
    console.log("Goog evening", n);
}
}
sayHello();