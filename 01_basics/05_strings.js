const name = "rajesh";

const repoCount = 50;

// console.log(name + repoCount + " value"); // outdated

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

// const gameName = new String("rocky - cool");
// console.log(gameName[6]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf("t"));

// const newString = gameName.substring(0, 5);
// console.log(newString);

// const anotherString = gameName.slice(-8, 5);
// console.log(anotherString);

const newStringone = "    rocky - cool  ";
console.log(newStringone.trim());

console.log(newStringone);

const url = "https://rocky.com/rocky%20cool";

console.log(url.replace("%20", "-"));
console.log(newStringone.includes("cool"));
