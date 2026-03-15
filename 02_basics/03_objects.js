// Singleteon
// Objesct iterals

const mySym = Symbol["key1"];

const JsUser = {
  name: "rajesh",
  [mySym]: "myKey1",
  age: 27,
  location: "hyderabad",
  email: "rajesh@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "saturday"],
};

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser[mySym]);

JsUser.email = "rajesh@chatgppty.com";
// Object.freeze(JsUser);
JsUser.email = "rajesh@hnaili.com";
// console.log(JsUser);

JsUser.greeting = function () {
  console.log("hello Js User");
};

JsUser.greetingTwo = function () {
  console.log(`hello Js User, ${this.name}`);
};
console.log(JsUser.greeting());

console.log(JsUser.greetingTwo());

console.log(JsUser.greetingTwo());
