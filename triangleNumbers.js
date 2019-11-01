let addingNumbers = 1;
let numberToDisplay = 1;
for (let i = 1; true; i++) {
  let factors = [];
  for (let j = 1; j <= numberToDisplay; j++) {
    if (numberToDisplay % j == 0) {
      factors.push(j);
    }
  }
  if (factors.length == 50) {
    console.log(numberToDisplay);
    console.log(factors);
    break;
  }
  addingNumbers = addingNumbers + 1;
  numberToDisplay = numberToDisplay + addingNumbers;
}
