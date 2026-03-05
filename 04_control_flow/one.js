// if

const temperature = 41;

// if (temperature === 40) {
//   console.log("less than 50");
// } else {
//   console.log("greater than 50");
// }

// console.log("executed");

// const score = 200;

// if (score > 100) {
//   let power = "fly";
//   console.log(`user power: ${power}`);
// }
// console.log(`user power: ${power}`);

//  Implicit code (immature coding, not recomended)

const Balance = 1000;

// if (Balance > 500) (console.log("test"), console.log("test2"));

// if (Balance < 500) {
//   console.log("less than 500");
// } else if (Balance < 750) {
//   console.log("less than 750");
// } else if (Balance < 950) {
//   console.log("less than 950");
// } else {
//   console.log("less than 1100");
// }

// and , and multiple condition check

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard) {
  console.log("allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
  console.log("allow to buy course");
}
