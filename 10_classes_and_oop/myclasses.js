//  Es6

// class User {
//   constructor(username, email, password) {
//     this.username = username;
//     this.email = email;
//     this.password = password;
//   }

//   encryptPassword() {
//     return `${this.password}absh`;
//   }

//   changeUsername() {
//     return `${this.username.toUpperCase()}`;
//   }
// }

// const chai = new User("chai", "raoir@hnedil.com", "437289hiuf");
// console.log("hjioasf");

// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());

// behind the scene

function User(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

User.prototype.encryptPassword = function () {
  return `${this.password}absh`;
};

User.prototype.changeUsername = function () {
  return `${this.username.toUpperCase()}`;
};

const tea = new User("chai", "raoir@hnedil.com", "437289hiuf");
console.log(tea.encryptPassword());
console.log(tea.changeUsername());
