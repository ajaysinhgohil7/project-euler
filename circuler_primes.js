let limit = 10000;
let finalArray = [];
for (let i = 1; i <= limit; i++){

    let number = i;
    let numberString = i.toString();
    let numbersArray = [];

    if(numberString.length >= 2) {
        numbersArray.push(number);
        for(let k = 0;  k < numberString.length; k++){
            let tempNumber;
            if(k === 0){
                tempNumber = numberString;
            }else{
                tempNumber = scrambleString(numberString);
            }
            let scrambledNumber = scrambleString(numberString);
            numbersArray.push(scrambledNumber);
        }
    }
    if(numbersArray.every(isPrime)){
        finalArray.push(...numbersArray);
    }
}

for (let value of
    new Set(finalArray.sort((a, b)=>{
        return parseInt(a) - parseInt(b)
    }))) {
    console.log(value);
}
function isPrime(number){
    let divisorCounter = 0;
    for(let j = 1; j <= number; j++){
        if(number%j === 0){
            divisorCounter++;
        }
    }
    if(divisorCounter === 2){
        return true
    }else{
        return false
    }
}

function scrambleString(numberString) {
    let firstChar = numberString[0];
    numberString = numberString.substring(1, numberString.length);
    numberString = numberString + firstChar;
    let numberInteger = parseInt(numberString);
    return numberInteger;
}




// if(numberString.length >= 2){
//
//     if(isPrime(number)){
//         console.log(number);
//         for(let k = 0; k < numberString.length - 1; k++){
//             let firstChar = numberString[0];
//             numberString = numberString.substring(1, numberString.length);
//             numberString = numberString + firstChar;
//             let numberInteger = parseInt(numberString);
//             if(!(numberInteger === number)){
//                 if(isPrime(numberInteger)){
//                     console.log(numberInteger)
//                 }
//             }
//
//         }
//     }
//
// }else{
//      if(isPrime(i)){
//          console.log(i);
//      }
// }
