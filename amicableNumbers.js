// for (let i = 1; i <= 1000; i++) {
//   let number = i;
//   let sumOfDivisiblesFirst = 0;
//   let sumOfDivisiblesSecond = 0;
//   let divisiblesArray = [];
//   for (let j = 1; j <= number; j++) {
//     if (number % j === 0) {
//       divisiblesArray.push(j);
//       sumOfDivisiblesFirst = sumOfDivisiblesFirst + j;
//     }
//   }

//   console.log("===========================");

//   console.log(divisiblesArray);
//   console.log(sumOfDivisiblesFirst);

//   divisiblesArray = [];

//   for (let k = 1; k <= sumOfDivisiblesFirst; k++) {
//     if (sumOfDivisiblesFirst % k === 0) {
//       divisiblesArray.push(k);
//       sumOfDivisiblesSecond = sumOfDivisiblesSecond + k;
//     }
//   }
//   console.log(divisiblesArray);
//   console.log(sumOfDivisiblesSecond);

//   //   if (sumOfDivisiblesFirst === sumOfDivisiblesSecond) {
//   //     console.log(sumOfDivisiblesFirst);
//   //     console.log(sumOfDivisiblesSecond);
//   //   }
// }

let numbersWithDivisiblesSum = [];

for (let i = 1; i <= 10000; i++) {
  let number = i,
    divisiblesSum = 0,
    divisiblesArray = [];

  for (let j = 1; j <= number; j++) {
    if (number % j === 0) {
      if (number != j) {
        divisiblesArray.push(j);
        divisiblesSum += j;
      }
    }
  }

  numbersWithDivisiblesSum.push({
    number: number,
    sumOfDivisibles: divisiblesSum,
    divisiblesArray: divisiblesArray
  });
}

numbersWithDivisiblesSum.forEach(objectMain => {
  numbersWithDivisiblesSum.forEach(objectSecondary => {
    if (
      objectMain.number === objectSecondary.sumOfDivisibles &&
      objectMain.sumOfDivisibles === objectSecondary.number &&
      objectMain.number !== objectSecondary.number &&
      objectMain.number < objectSecondary.number
    ) {
      console.log("=================");
      console.log(objectMain);
      console.log(objectSecondary);
    }
  });
});
