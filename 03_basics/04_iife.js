// Immediately invoked function expressions (IIFE)

(function chai() {
  console.log(`DB CONNECTED`);
})();

(function aurCode() {
  console.log(`chai aur code`);
})();

((name) => {
  console.log(`DB connected 3 ${name}`);
})("rajesh");
