let limit = 10001;
let currentPrimeCounter = 0;
for (let i = 1; true; i++) {
  let primeCounter = 0;
  for (let j = 1; j <= i; j++) {
    if (i % j == 0) {
      primeCounter++;
    }
  }
  if (primeCounter > 2) {
  } else {
    currentPrimeCounter++;
  }

  if (currentPrimeCounter == limit + 1) {
    console.log(i);
    break;
  }
}
