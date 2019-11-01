let number = 1;
// let multiWith = 2;
// let product = 1;

//Max 69 is valid for square

for (let i = 1; i <= 69; i++) {
  number = number * 2;
}
console.log(number);
let numberString = number.toString();

let productDigitSum = 0;

for (let j = 0; j < numberString.length; j++) {
  productDigitSum += parseInt(numberString.charAt(j));
}
console.log(productDigitSum);
