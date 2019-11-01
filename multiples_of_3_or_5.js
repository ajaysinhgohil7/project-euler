// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

const firstMultiple = 3;
const secondMultiple = 5;
const limit = 10;

function getSumOfMultiples(firstMultiple, secondMultiple, limit) {
  let sum = 0;
  for (let i = 0; i < limit; i++) {
    if (i % firstMultiple == 0 || i % secondMultiple == 0) {
      sum = sum + i;
    }
  }
  return sum;
}

console.log(getSumOfMultiples(firstMultiple, secondMultiple, limit));
