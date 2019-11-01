let number = 600851475143;
let counter = 1;
let largestFactor = 0;
while (number != 1) {
  if (number % counter == 0) {
    console.log(counter);
    largestFactor = counter;
    number = number / counter;
  }
  counter++;
}
