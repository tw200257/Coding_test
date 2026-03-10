const fs = require('fs');
const input = fs.readFileSync(0).toString().split('\n');
const nArray = input[1].split(' ').map(Number); //입력받은 숫자들
const mArray = input[3].split(' ').map(Number); //찾아야 할 숫자들
const nSet = new Set(nArray);
const r = mArray.map(num => {
    return nSet.has(num) ? 1 : 0; 
    
});
console.log(r.join('\n'));