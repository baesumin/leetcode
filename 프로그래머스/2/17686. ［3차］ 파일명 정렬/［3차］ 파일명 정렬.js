function solution(files) {
     function convert(file) {
        let numberStart = -1;
        let numberEnd = -1;
        
        for (let i = 0; i < file.length; i++) {
            if (!isNaN(parseInt(file[i])) && file[i] !== ' ') {
                numberStart = i;
                break;
            }
        }
        
        for (let i = numberStart; i < Math.min(numberStart + 5, file.length); i++) {
            if (isNaN(parseInt(file[i])) || file[i] === ' ') {
                break;
            }
            numberEnd = i;
        }
        
        const head = file.slice(0, numberStart).toLowerCase();
        const number = parseInt(file.slice(numberStart, numberEnd + 1));
        
        return [head, number];
    }
    
    return files.sort((a,b)=>{
        const [headA,numA] = convert(a)
        const [headB,numB] = convert(b)
        
        const headCompare = headA.localeCompare(headB);
        if (headCompare !== 0) return headCompare;
        
        return numA - numB
    })
}