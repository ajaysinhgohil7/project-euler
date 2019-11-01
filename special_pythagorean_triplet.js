let sum = 1000;
let numbers = [];

for (let i = 1; i < 1000; i++) {
  for (let j = 1; j < 1000; j++) {
    for (let k = 1; k < 1000; k++) {
      if (i * i + j * j == k * k) {
        // if (i + j + (i + 1) === 1000) {
        if (i < j < k) {
          if (i + j + k === 1000) {
            if (
              !numbers.includes(i) &&
              !numbers.includes(j) &&
              !numbers.includes(k)
            ) {
              numbers.push(i);
              numbers.push(j);
              numbers.push(k);
            }
          }
        }
      }
    }
  }
}

console.log(numbers);
