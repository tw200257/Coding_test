function solution(n, times) {
    // 오름차순 정렬 (최솟값, 최댓값 설정을 위해)
    times.sort((a, b) => a - b);

    let left = 1n; // BigInt 사용
    let right = BigInt(times[times.length - 1]) * BigInt(n);
    let answer = right;

    while (left <= right) {
        let mid = (left + right) / 2n;
        let count = 0n;

        // mid 시간 동안 각 심사관이 처리할 수 있는 사람 수의 합
        for (let time of times) {
            count += mid / BigInt(time);
        }

        if (count >= BigInt(n)) {
            // 충분히 심사할 수 있는 경우 -> 시간을 더 줄여봄
            answer = mid;
            right = mid - 1n;
        } else {
            // 시간이 부족한 경우 -> 시간을 늘림
            left = mid + 1n;
        }
    }

    return Number(answer); 
}