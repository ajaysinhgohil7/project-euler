let limit = 10;

const even_fibobacci = function(limit) {
  let a = 1;
  let b = 2;
  let tmp = 0;
  let sum = 0;
  for (let i = 0; i < limit; i++) {
    c = a + b;
    a = b;
    b = c;
    if (c % 2 == 0) sum = sum + c;
  }
  return sum;
};

console.log(even_fibobacci(limit));
