let smallestDigit = 100;
let largestDigit = 999;

const checkPalindrome = function(number) {
  let originalNumber = number;
  let reverseNumberString = "";
  while (number > 1) {
    reverseNumberString += Math.floor(number % 10);
    number = number / 10;
  }
  return parseInt(reverseNumberString) === originalNumber;
};

const findLargestPalindromeByThreeNumbers = function(
  largestDigit,
  smallestDigit
) {
  let largestPalindrome;

  for (let i = largestDigit; i > smallestDigit; i--) {
    let j = i - 1;
    while (j != smallestDigit) {
      if (checkPalindrome(i * j)) {
        largestPalindrome = i * j;
        break;
      }
      j--;
    }
    if (largestPalindrome) {
      break;
    }
  }
  return largestPalindrome;
};

console.log(findLargestPalindromeByThreeNumbers(largestDigit, smallestDigit));
