const fs = require('fs');
const input= fs.readFileSync(0).toString().split('\n');
const [n, k] = input[0].split(' ').map(Number);
let aArray=input[1].split(' ').map(Number);
aArray.sort((a,b)=> a-b);
console.log(aArray[k-1]);