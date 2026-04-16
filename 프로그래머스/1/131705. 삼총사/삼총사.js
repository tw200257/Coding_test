function solution(number) {
    var answer = 0;
    const len = number.length;

    // 첫 번째 숫자를 선택 (i)
    for (let i = 0; i < len; i++) {
        // 두 번째 숫자를 선택 (j는 i 이후부터)
        for (let j = i + 1; j < len; j++) {
            // 세 번째 숫자를 선택 (k는 j 이후부터)
            for (let k = j + 1; k < len; k++) {
                // 세 수의 합이 0인지 확인
                if (number[i] + number[j] + number[k] === 0) {
                    answer++;
                }
            }
        }
    }
    return answer;
}