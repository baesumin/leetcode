function solution(n) {
    const result = [];
    result[0] = 1;
    result[1] = 2;
    for(let i = 2; i < n; i++) {
        const sum = result[i - 1] + result[i - 2];
        result[i] = sum > 1000000007 ? sum % 1000000007 : sum;
    }

    return result.at(-1);
}