const findSmallestMultiple = function(upperLimit) {
  //   let smallestMultiple;
  for (let i = 1; true; i++) {
    let cnt = 0;
    for (let j = 1; j <= upperLimit; j++) {
      if (i % j == 0) {
        cnt++;
      }
    }
    if (cnt == upperLimit) {
      return i;
    }
    if (i == 999999999999999) {
      return i;
    }
  }
};

console.log(findSmallestMultiple(20));
