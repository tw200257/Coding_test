function solution(new_id) {
    const answer = new_id
        .toLowerCase() // 1단계
        .replace(/[^\w-.]/g, '') // 2단계: 소문자, 숫자, -, _, . 제외 제거 (\w는 [a-z0-9_]와 같음)
        .replace(/\.{2,}/g, '.') // 3단계: 마침표 2개 이상을 하나로
        .replace(/^\.|\.$/g, '') // 4단계: 처음과 끝 마침표 제거
        .padEnd(1, 'a')          // 5단계: 빈 문자열이면 'a' 추가 (길이 1이 될 때까지 'a'로 채움)
        .slice(0, 15)            // 6단계-1: 15자만 남기기
        .replace(/\.$/g, '');    // 6단계-2: 끝에 남은 마침표 제거

    // 7단계: 길이가 2자 이하라면 마지막 문자를 3자가 될 때까지 반복
    return answer.length <= 2 
        ? answer.padEnd(3, answer[answer.length - 1]) 
        : answer;
}