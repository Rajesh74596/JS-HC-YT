function one() {
  const username = "rajesh";

  function two() {
    const website = "youtube";
    console.log(username);
  }

  //   console.log(website);

  //   two();
}

// one();

if (true) {
  const username = "Rajesh";
  if (username === "Rajesh") {
    const website = " youtube";
    console.log(username + website);
  }
  //   console.log(website);
}

// console.log(username);

console.log(addOne(5));

function addOne(num) {
  return num + 1;
}

addTwo(9);
const addTwo = function (num) {
  return num + 2;
};
// console.log(addTwo(5));
