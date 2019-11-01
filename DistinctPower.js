let base = 2;
let power = 10;

console.log(Math.pow(10, 10));

let poweredArray = [];

for (let i = 2; i <= 10; i++) {
  for (let j = 2; j <= 10; j++) {
    let powered = Math.pow(i, j);
    poweredArray.push(powered);
  }
}
console.log([
  ...new Set(
    poweredArray.sort((a, b) => {
      return a - b;
    })
  )
]);
