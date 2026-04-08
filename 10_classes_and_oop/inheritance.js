class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`USERNAME is ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`new course was added by ${this.username}`);
  }
}

const chai = new Teacher("chai", "cvhai@hga.com", "yhfodiasf37");

chai.logMe();

const masalaChai = new User("masalachai");

masalaChai.logMe();

console.log(chai instanceof User);
