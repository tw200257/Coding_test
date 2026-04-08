const fs = require('fs');
const input = fs.readFileSync(0).toString().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const cards = input[1].split(' ').map(Number);

let maxResult = 0;

function DFS(L, start, sum) {
  
    if (sum > M) return;

    if (L === 3) {
        maxResult = Math.max(maxResult, sum);
        return;
    }

    for (let i = start; i < N; i++) {
        DFS(L + 1, i + 1, sum + cards[i]);
    }
}

DFS(0, 0, 0);
console.log(maxResult);