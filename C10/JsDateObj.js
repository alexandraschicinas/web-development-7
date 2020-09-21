//JS Date Output
// by default, js will use the browser's time zone and display a date as a full text strig:
// Creating Date OBj
// Date obj are created with the "new Date()" constructor.

const d = new Date (8978563412);
document.getElementById("demo").innerHTML = d;
console.log(d);

//There are 4 ways to create a new date obj:
// 1. new date() , 2. new Date(year, mounth, day, hours, minutes, seconds, miliseconds)
// 3. new Date(milliseconds), 4. new Date(date strings);

const d2 = new Date (1991,01,19,05,00, 00,00);
document.getElementById("demo2").innerHTML= d2;
console.log(d2);

// ! JS counts months from 0 to 11. January is 0 and December 11.
// you can not omit month! If you suplly one parameter it will be treates as miliseconds.
// one or two digit year will be intrpreted as 19xx.

const d3 = new Date ("february 19, 1991, 05:24:45");
document.getElementById("demo3").innerHTML = d3;
console.log(d3);

//Js stores dates as number of miliseconds since January 01, 1970, 00:00:00 UTC. Zero time is 01 Jan 1970, 00:00:00.
// first example;

//Date Methods

// when a Date object is created, a n umber of methods allow you to operate on it.
// date methods allow you to get and set the year, month, day, hour, minute, second, and miliseond of date objects, using either local time or utc time.
// by default Js will output dates in full text string format
// document.getElementById("").innerHTML= d = document.getElementById("").innerHTML= d.toString();

// toUTCString() Method

const d4 = new Date(3456783892);
document.getElementById("demo4").innerHTML = d4.toUTCString();
console.log(d4);

// toDateString Method - convers the Date in a more readable format;

const d5 = new Date ();
document.getElementById("demo5").innerHTML = d5.toDateString();

// toISOString() method convers a date to a string, using the ISO standard format:

const d6 = new Date ();
document.getElementById("demo6").innerHTML = d5.toISOString();

//JS Date Formats
// DateInput
// the are generally 3 types of JS date input formats:
// 1. ISO Date 2015-03-25, 2.Short Date 03/25/2015, 3. Long Date Mar 25 2015 or 25 Mar 2015;
// Iso format follows a strict standard in JS, the other formats are not so well defined and might be browser specific.

//Date Output
// independenty of input format , JS will by default output dates in full text string format:
// wed Mar 12 2015 02:00 GMT+0200

//Js ISO Dates
//ISO 8601 is the international standard for the representation of dates and times
// the ISO 8601 syntac (YYYY-MM-DD) is also the prefered JS date format
 const d7 = new Date("2020-09-29");
 document.getElementById("demo7").innerHTML= d7;

 //the computed date will be relative to your time zone.

//ISO Dates (year and month)
//can be written without speccifying the day (YYYY-MM):

const d8 = new Date("2020-09");
document.getElementById("demo8").innerHTML = d8;

//ISO dates can be written without month and day(YYYY)

const d9 = new Date("2020");
document.getElementById("demo9").innerHTML = d9;

// date and time is separated with a capital T, UTC time is defined with a capital letter Z.
// if you want to modify the time relative UTC, remove Z and add + HH:MM or -HH:MM;
const d10 = new Date("2020-09-19T10:21-02:21");
document.getElementById("demo10").innerHTML= d10;
console.log(d10);

//Times Zones

//When we are setting a date, without specifying the time zone, JS will use the browser's time zone.
//When getting a date, without specifying the time zome, the result is covers to the browser's time zone.
//Is a date/time is created in GMT(Greenwich Mean Time). the date/time will be converted to CDT(Central US dauylight Time) if a user browses from cenral US.

//JS dates are written with an "MM/DD/YYYY" syntax.

//Date Input Parsing Dates:
// if you have a valid date string, you can use the Date.Parse method to convert it to miliseconds.
// Date.parse() returns the number of miliseconds between the date and Jan 1, 1970.

const d11 = Date.parse("february 19, 1991");
document.getElementById("demo11").innerHTML = d11;
console.log(d11);
const msec = new Date(d11);
console.log(msec);