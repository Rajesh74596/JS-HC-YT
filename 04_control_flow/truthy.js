const userEmail = "";

if (userEmail) {
  console.log("got User email");
} else {
  console.log("email not found");
}

//  falsy values
// false, o, -0, null, undefined, BigInt 0n, "", NaN

//  truthy

// true, "0", [], {}, 'false', " ", function () {},

// if (userEmail.length === 0) {
//   console.log("array is empty");
// }

// const emptyobj = {};

// if (Object.keys(emptyobj).length === 0) {
//   console.log("object is empty");
// }

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
val1 = undefined ?? 10 ?? 20;

console.log(val1);

// Terniary Operator

//  condition ? true : false

const iceTeaPrice = 100;

iceTeaPrice <= 90
  ? console.log("less than 90")
  : console.log("greater than 90");
