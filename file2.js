"use strict";
let firstName = "Rishav";
console.log(firstName);
firstName = "Manas";
console.log(firstName);

const PI = 3.14;
console.log(PI);
console.log(PI ** 2);

console.log(firstName[0]);

console.log(firstName.length);

console.log(firstName[firstName.length - 1]);
//getting the last index

firstName = "           Rishav          ";
console.log(firstName.length);
let newFirstName = firstName.trim()
console.log(newFirstName, newFirstName.length);

console.log(newFirstName.toUpperCase());

console.log(newFirstName.toLowerCase());

let name = newFirstName.slice(2)
console.log(name);