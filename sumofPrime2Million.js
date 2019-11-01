let limit = 2000000;
let sum = 0;
for (let i = 1; i < limit; i++) {
  let primeCounter = 0;
  for (let j = 1; j <= i; j++) {
    if (i % j == 0) {
      primeCounter++;
    }
  }
  if (primeCounter == 2) {
    sum = sum + i;
  }
}
console.log(sum);
