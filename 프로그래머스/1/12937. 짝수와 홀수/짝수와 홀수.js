function solution(num) {
    num=num>=0?num:-num
    return num%2===1?'Odd':'Even'
}