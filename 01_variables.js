const accountId = 144533;
let accountEmail = "rajeshrk@gmail.com";
var accountPassword = "12345";
accountCity = "hyderabad";

// accountId = 2; // not allowed

console.log(accountId);

accountEmail = "rocky@gmail.com";
accountPassword = "3424";
accountCity = "bangalore";
let accountState;
console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);

/*
prefer not to use var
bacause of issue in block code
*/

/*
you can decleare a without writing a let or var
But it is not recomended to do
*/
