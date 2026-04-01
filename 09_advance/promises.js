const promiseOne = new Promise(function (resolve, reject) {
  // Do an async task
  // DB calls, cryptography, network
  setTimeout(function () {
    (console.log(`async task is complete`), resolve(), 2000);
  });
});

promiseOne.then(function () {
  console.log("promise consumed");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    (console.log("async task 2"), resolve());
  }, 1000);
}).then(function () {
  console.log("async 2 is resolved");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "rajesh rk", mailid: "rajesh 454@gmail.com" });
  }, 1000);
});

promiseThree.then(function (rajesh) {
  console.log(rajesh);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "rajesh", password: "123344" });
    } else {
      reject("ERROR: something went wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.password;
  })
  .then((password) => {
    console.log(password);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log(`finally the promise is either resolved or rejected`);
  });

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve(`{ username: "JavaScript", password: "123344" }`);
    } else {
      reject(`ERROR: Somethine went wrong`);
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const result = await promiseFive;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
consumePromiseFive();

// async function getUserData() {
//   try {
//     const response = await fetch("https://api.github.com/users/rajesh74596");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(`E: something is not correct`);
//   }
// }

// getUserData();

fetch("https://api.github.com/users/rajesh74596")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));
