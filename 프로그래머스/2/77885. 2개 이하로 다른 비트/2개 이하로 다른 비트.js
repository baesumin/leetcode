function solution(numbers) {
    let result = []
    
    for(let i=0;i<numbers.length;i++){
        let num = numbers[i]
        
        if(num%2===0){
            result.push(num+1)
        }else{
            let temp = '0' + num.toString(2)
            let idx = temp.lastIndexOf('01')
            temp = temp.substring(0, idx) + '10' + temp.substring(idx+2)
            result.push(parseInt(temp,2))
        }
    }
    
    return result
}