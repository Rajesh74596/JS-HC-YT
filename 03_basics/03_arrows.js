const user = {
  username: "hitesh",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username}, welcome to website`);
    console.log(this);
  },
};

// user.welcomeMessage();
// user.username = "rajesh";
// user.welcomeMessage();

// console.log(this);

// function chai() {
//   let username = "hitesh";
//   console.log(this.username);
// }

// chai();

// const chai = function () {
//   let username = "hitesh";
//   console.log(this.username);
// };

// const chai = () => {
//   let username = "rajesh";
//   console.log(this.username);
// };

// chai();

// const addTwo = (num1, num2) => num1 + num2;
// const addTwo = (num1, num2) => num1 + num2;

const addTwo = (num1, num2) => (username = "rajesh");
console.log(addTwo(2, 5));
