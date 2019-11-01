// If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.
//
// If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?
//
// NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. The use of "and" when writing out numbers is in compliance with British usage.


let limit = 1120;

for (let i = 100; i <= limit; i++){
    let number = i;
    let level = 0;
    let mainString = '';

    while(number !== 0){
        let reminder = number % 10;
        level += 1;
        let word = determineWordForDecimalPlace(level, reminder, i);
        let separator = null;

        if(level === 2){
            separator = '-';
        }else if(level === 3){
            separator = ' and ';
        }

        mainString = `${word}${ word.length ? mainString.length ? separator ? separator : '' : '': ''}${mainString}`;
        number = Math.floor(number / 10);

        let breakConditionNumber = i;
        if(level == 2 ){

        }

        if(reminder >= 10 && reminder <= 19){
            break;
        }
    }
    console.log(mainString)
}

function determineWordForDecimalPlace(level, digit, incomingNumber){
    let word = '';
    let modulusDividor = 1;

    if(level === 2){
        modulusDividor = 100;
    }else if(level === 3){
        modulusDividor = 1000;
    }

    let number = incomingNumber % modulusDividor;

    if(number === 10){
        word = 'ten'
    }else if(number === 11){
        word = 'eleven'
    }else if(number === 12){
        word = 'twelve'
    }else if(number === 13){
        word = 'thirteen'
    }else if(number === 14){
        word = 'fourteen'
    }else if(number === 15){
        word = 'fifteen'
    }else if(number === 16){
        word = 'sixteen'
    }else if(number === 17){
        word = 'seventeen'
    }else if(number === 18){
        word = 'eighteen'
    }else if(number === 19){
        word = 'nineteen'
    } else{
        switch (level) {
            case 1:
                if (digit === 1){
                    word = 'one';
                }else if(digit === 2){
                    word = 'two';
                }else if(digit === 3){
                    word = 'three';
                }else if(digit === 4){
                    word = 'four';
                }else if(digit === 5){
                    word = 'five';
                }else if(digit === 6){
                    word = 'six';
                }else if(digit === 7){
                    word = 'seven';
                }else if(digit === 8){
                    word = 'eight';
                }else if(digit === 9){
                    word = 'nine';
                }else if(digit === 0){
                    word = '';
                }

                break;
            case 2:

                if (digit === 1){
                    word = 'ten';
                }else if(digit === 2){
                    word = 'twenty';
                }else if(digit === 3){
                    word = 'thirty';
                }else if(digit === 4){
                    word = 'forty';
                }else if(digit === 5){
                    word = 'fifty';
                }else if(digit === 6){
                    word = 'sixty';
                }else if(digit === 7){
                    word = 'seventy';
                }else if(digit === 8){
                    word = 'eighty';
                }else if(digit === 9){
                    word = 'ninety';
                }else if(digit === 0){
                    word = '';
                }
                break;
            case 3:

                if (digit === 1){
                    word = 'one hundred';
                }else if(digit === 2){
                    word = 'two hundred';
                }else if(digit === 3){
                    word = 'three hundred';
                }else if(digit === 4){
                    word = 'four hundred';
                }else if(digit === 5){
                    word = 'five hundred';
                }else if(digit === 6){
                    word = 'six hundred';
                }else if(digit === 7){
                    word = 'seven hundred';
                }else if(digit === 8){
                    word = 'eight hundred';
                }else if(digit === 9){
                    word = 'nine hundred';
                }else if(digit === 0){
                    word = '';
                }
                break;
            case 4:

                if (digit === 1){
                    word = 'one thousand ';
                }else if(digit === 2){
                    word = 'two thousand ';
                }else if(digit === 3){
                    word = 'three thousand ';
                }else if(digit === 4){
                    word = 'four thousand ';
                }else if(digit === 5){
                    word = 'five thousand ';
                }else if(digit === 6){
                    word = 'six thousand ';
                }else if(digit === 7){
                    word = 'seven thousand ';
                }else if(digit === 8){
                    word = 'eight thousand ';
                }else if(digit === 9){
                    word = 'nine thousand ';
                }else if(digit === 0){
                    word = '';
                }
                break;

        }
    }
    return word;
}








// for (let i = 1; i <= limit; i++){
//     let word;
//
//     if(Math.floor(i / 10) === 0){
//         if (i === 1){
//             word = 'one';
//         }else if(i === 2){
//             word = 'two';
//         }else if(i === 3){
//             word = 'three';
//         }else if(i === 4){
//             word = 'four';
//         }else if(i === 5){
//             word = 'five';
//         }else if(i === 6){
//             word = 'six';
//         }else if(i === 7){
//             word = 'seven';
//         }else if(i === 8){
//             word = 'eight';
//         }else if(i === 9){
//             word = 'nine';
//         }
//     }else{
//
//     }
//     console.log(word);
// }


