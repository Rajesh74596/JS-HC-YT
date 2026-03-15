const marvel_heroes = ["thor", "Ironman", "spiderman"];
const dc_heroes = ["superman", "flash", "batman"];

// marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes);

// const allHeroes = marvel_heroes.concat(dc_heroes);
// console.log(allHeroes);

const all_New_Heroes = [...marvel_heroes, ...dc_heroes]; //spread operator, similar to "concat"
// console.log(all_New_Heroes);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);

Array.isArray("rajesh");
console.log(Array.isArray("rajesh"));
console.log(Array.from("rajesh"));

console.log(Array.from({ name: "rajesh" })); // for Interview

let score1 = 100;
let score2 = 200;
let score3 = 300;

// console.log(Array.of(score1, score2, score3));
