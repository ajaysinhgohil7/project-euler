let fs = require('fs');
let data = fs.readFileSync('./namesCOPY.txt', 'utf8');

data = data.split('","');
data[0] = data[0].slice(1, data[0].length);
data[data.length - 1] = data[data.length - 1].slice(0, data[data.length - 1].length - 1);

let mainSum = 0;

for (let i = 0; i < data.length; i++) {
    let name = data[i];
    let characterCodeSum = 0;
    for (let j = 0; j < name.length; j++) {
        let charCode = name.charCodeAt(j) - 64;
        characterCodeSum += charCode;
    }
    mainSum += characterCodeSum * i;
}

console.log(mainSum);
