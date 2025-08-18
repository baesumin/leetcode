function solution(s){
    s=s.toLowerCase().replace(/[^py]/g, "")
    return s.length/2 === s.replaceAll('p','').length;
}