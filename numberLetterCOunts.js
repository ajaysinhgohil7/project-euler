let limit = 5;

function checkLettersForSingleDigitNumber(number) {
  switch (number) {
    case 1:
      return "one";
      break;
    case 2:
      return "two";
      break;
    case 3:
      return "three";
      break;
    case 4:
      return "four";
      break;
    case 5:
      return "five";
      break;
    case 6:
      return "six";
      break;
    case 7:
      return "seven";
      break;
    case 8:
      return "eight";
      break;
    case 9:
      return "nine";
      break;
    default:
      break;
  }
}

function checkLettersForDouble11TO19DigitNumber(number) {
  switch (number) {
    case 11:
      return "eleven";
      break;
    case 12:
      return "twelve";
      break;
    case 13:
      return "thirteen";
      break;
    case 14:
      return "fourteen";
      break;
    case 15:
      return "fifteen";
      break;
    case 16:
      return "sixteen";
      break;
    case 17:
      return "seventeen";
      break;
    case 18:
      return "eighteen";
      break;
    case 19:
      return "nineteen";
      break;
    default:
      break;
  }
}

function checkLettersForDoubleDigitNumber(number) {
  switch (number) {
    case 1:
      return "ten";
      break;
    case 2:
      return "twenty";
      break;
    case 3:
      return "thirty";
      break;
    case 4:
      return "fourty";
      break;
    case 5:
      return "fifty";
      break;
    case 6:
      return "sixty";
      break;
    case 7:
      return "seventy";
      break;
    case 8:
      return "eighty";
      break;
    case 9:
      return "ninety";
      break;
    default:
      break;
  }
}

let sumOfLetters = 0;
for (let i = 10; i <= 29; i++) {
  if (i > 10 && i < 19) {
    console.log(checkLettersForDouble11TO19DigitNumber(i));
  }
  if (i >= 20 && i < 99) {
    console.log(checkLettersForDoubleDigitNumber(i / 10));
  } else if (i >= 100 && i < 999) {
  } else {
    // sumOfLetters += checkLettersForSingleDigitNumber(i).length;
  }
}
console.log(sumOfLetters);
