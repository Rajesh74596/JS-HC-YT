class User {
  constructor(username) {
    this.Username = username;
  }

  logMe() {
    console.log(`Username: ${this.username}`);
  }

  static createID() {
    return "2424";
  }
}

const rajesh = new User("rocky");

console.log(rajesh.createID());
