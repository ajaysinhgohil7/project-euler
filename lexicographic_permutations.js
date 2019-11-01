let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let joinedNumberString = numbers.join("");
let joinedNumber = parseInt(numbers.join(""));
let reversedNumberString = "";
for (let i = numbers.length - 1; i >= 0; i--) {
  reversedNumberString += numbers[i];
}
let reversedNumber = parseInt(reversedNumberString);

let counter = 0;
for (let i = joinedNumber; i <= reversedNumber; i++) {
  let tempNumber = "";
  if (reversedNumberString.length > i.toString().length) {
    tempNumber += "0" + i;
  } else {
    tempNumber += i;
  }
  let flag = true;
  for (let k = 0; k < numbers.length; k++) {
    if (!tempNumber.includes(numbers[k])) {
      flag = false;
    }
  }
  if (flag) {
    console.log(tempNumber);
    counter++;
  }
  if (counter === 1000000) {
    console.log("One Millionth LexicalNumber " + tempNumber);
    break;
  }
}
