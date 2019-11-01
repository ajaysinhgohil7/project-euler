const getDiffernce = limit => {
  let sumOfSquares = 0;
  let squareOfSum = 0;

  let sum = 0;

  for (let i = 1; i <= limit; i++) {
    sum = sum + i;
    sumOfSquares += i * i;
  }

  squareOfSum = sum * sum;

  return squareOfSum - sumOfSquares;
};

console.log(getDiffernce(100));
