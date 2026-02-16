const { useOptimistic } = require("react");

function saymyName() {
  console.log("R");
  console.log("a");
  console.log("j");
  console.log("e");
  console.log("s");
  console.log("h");
}

// saymyName();

function addTwoNumbers(num1, num2) {
  console.log(num1 + num2);
}

// addTwoNumbers(3, 4);
// addTwoNumbers(3, "4");
addTwoNumbers(3, null);

function addTwoNumbers(num1, num2) {
  // let result = num1 + num2;
  // return result;

  return num1 + num2;
}
const result = addTwoNumbers(3, 5);

// console.log(result);

function loginUserMessage(username) {
  return `${username} just logged in`;
}

loginUserMessage("rajesh");

// console.log(loginUserMessage("rajesh"));
// console.log(loginUserMessage()); result = undefined just logged in

// function loginUserMessage(username) {
//   if (username === undefined) {
//     console.log("please enter a username");
//     return;
//   }
//   return `${username} just logged in`;
// }

// console.log(loginUserMessage());

function loginUserMessage(username = "rocky") {
  if (!username) {
    console.log("please enter a username");
    return;
  }
  return `${username} just logged in`;
}

// console.log(loginUserMessage()); rsult = rocky just logged in
// console.log(loginUserMessage("rajesh")); // rajesh just logged in

const user = {
  user: "rajesh",
  price: 399,
};

function handleObject(anyobject) {
  console.log(
    `username is ${anyobject.user} and the price is ${anyobject.price}`,
  );
}

// handleObject(user);

handleObject({
  user: "rocky",
  price: 299,
});

const myNewArray = [200, 300, 400];

function returnSecondValue(getArray) {
  return getArray[0];
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([400, 200, 514, 255]));
