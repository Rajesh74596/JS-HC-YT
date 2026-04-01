// const user = {
//   username: "rajesh",
//   loginCount: 8,
//   signedIn: true,

//   getUserDetails: function () {
//     console.log("got User details from database");
//     console.log(`got User details from database ${this.username}`);
//     console.log(this);
//   },
// };

// console.log(user.username);
// console.log(user.getUserDetails());

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;
  return this;
}

const UserOne = new User("hitesh", 12, true);
const UserTwo = new User("Rocky", 15, false);
console.log(UserOne);
console.log(UserTwo);
