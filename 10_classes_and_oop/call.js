function setUserName(username) {
  //complex DB calls
  this.username = username;
  console.log("checking");
}

function createUser(username, email, password) {
  setUserName.call(this, username);
  this.email = email;
  this.password = password;
}

const chai = new createUser("chai", " chai@fab.com", "1234");
console.log(chai);
