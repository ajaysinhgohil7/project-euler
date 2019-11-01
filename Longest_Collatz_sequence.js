let evenFormula = n => n / 2;
let oddFormula = n => 3 * n + 1;

// let number = 13;
// console.log(number);

let largestChain = 0;
let largestChainNumber = 0;
let largestChainArray = [];

for (let i = 1; i <= 1000000; i++) {
  let chainCounter = 0;
  let j = i;
  let aa = [];
  while (j != 1) {
    aa.push(j);
    if (j % 2 == 0) {
      j = evenFormula(j);
    } else {
      j = oddFormula(j);
    }
    chainCounter = chainCounter + 1;
  }
  chainCounter = chainCounter + 1;
  if (largestChain < chainCounter) {
    largestChainNumber = i;
    largestChainArray = aa;
    largestChain = chainCounter;
  }
}
console.log(largestChain);
console.log(largestChainNumber);
console.log(largestChainArray);
