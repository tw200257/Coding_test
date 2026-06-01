const fs = require('fs');

const input = fs.readFileSync(0).toString().trim().split('\n');

// N과 M 추출
const [N, M] = input[0].split(' ').map(Number);
// 주어진 수열을 오름차순으로 정렬
const numbers = input[1].split(' ').map(Number).sort((a, b) => a - b);

const result = [];
const temp = []; // 현재 탐색 중인 수열을 담을 배열

function dfs(start, depth) {
    // M개의 숫자를 모두 골랐다면 result 배열에 추가
    if (depth === M) {
        result.push(temp.join(' '));
        return;
    }

    // 비내림차순(오름차순)을 유지하며 중복을 허용해야 하므로
    // 다음 탐색은 현재 선택한 숫자 인덱스(i)부터 시작합니다.
    for (let i = start; i < N; i++) {
        temp.push(numbers[i]);     // 배열에 숫자 추가
        dfs(i, depth + 1);         // 재귀 호출 (현재 인덱스 i를 그대로 넘겨줌)
        temp.pop();                // 탐색이 끝나면 가장 최근에 넣은 숫자를 빼고 다음 숫자로 넘어감
    }
}

dfs(0, 0);

// 매번 console.log를 호출하면 시간 초과가 발생할 수 있으므로,
// 결과를 배열에 모아두었다가 한 번에 출력합니다. (자바의 StringBuilder 역할)
console.log(result.join('\n'));
