//Array

const myArr = [0, 1, 2, 3, 4, 5];

const myHeroes = ["shaktiman", "Ironman", "heman"];

const myArr2 = new Array(1, 2, 3, 4, 5, 6);

//console.log(MyArr[0]);

// MyArr.push(5, 6, 7);
// MyArr.push("rocky");
// MyArr.pop();

// MyArr.shift();

// console.log(MyArr.includes(3));
// console.log(MyArr.indexOf(3));

const newArr = myArr.join();

// console.log(myArr);
// console.log(typeof myArr2);

// Slice and Splice

console.log("A", myArr);

const myn1 = myArr.slice(1, 3);

console.log(myn1);

console.log("B", myArr2);

const myn2 = myArr2.splice(1, 3);
console.log(myArr2);
