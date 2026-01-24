// Primitive DataTypes

// There are 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100; // string
const scoreValue = 100.3; // number
const isLoggedIn = false; // boolean
const outsideTemp = null; // null
let usermail; // undefined

// symbol
const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId);
// output = false

const bigNumber = 33254545254; // bigInt

// Reference(Non primitive)

// Array, Objects, Functions

/*
Array */

const heros = ["shaktiman", "nagraj", "doga"];

/*
Object
*/

let myObj = {
  name: "rocky",
  Age: 22,
};

/*
Function
*/

const myFunction = function () {
  //   console.log("hello world");
};

/*
Typof
*/

console.log(typeof outsideTemp);

//

const name = "rajesh";

const repoCount = 50;

// console.log(name + repoCount + " value"); // outdated

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

// const gameName = new String("rocky - cool");
// console.log(gameName[6]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf("t"));

// const newString = gameName.substring(0, 5);
// console.log(newString);

// const anotherString = gameName.slice(-8, 5);
// console.log(anotherString);

const newStringone = "    rocky - cool  ";
console.log(newStringone.trim());

console.log(newStringone);

const url = "https://rocky.com/rocky%20cool";

console.log(url.replace("%20", "-"));
console.log(newStringone.includes("cool"));
