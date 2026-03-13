const myNums = [1, 2, 3];

// const myTotal = myNums.reduce(function (acc, currval) {
//   console.log(`acc: ${acc} and currva: ${currval}`);
//   return acc + currval;
// }, 0);

// console.log(myTotal);

// const myTotal = myNums.reduce((acc, carrval) => acc + carrval, 0);
// console.log(myTotal);

const shoppingCart = [
  {
    itemname: "Js course",
    price: 2999,
  },
  {
    itemname: "py course",
    price: 999,
  },
  {
    itemname: "mobile dev course",
    price: 5999,
  },

  {
    itemname: "mobile dev course",
    price: 5999,
  },
];

const TotalPrice = shoppingCart.reduce((acc, item) => acc + item.price, 0);

console.log(`the total price for all course: "${TotalPrice}"`);
