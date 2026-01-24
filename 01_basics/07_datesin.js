let myDate = new Date();

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2026, 0, 23, 5, 4);
let myCreatedDate = new Date("2026-01-14");
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()));

let newDate = new Date();
// console.log(newDate.getDate());

`${newDate.getDay()}`;

newDate.toLocaleString(`default`, {
  weekday: "long",
});
