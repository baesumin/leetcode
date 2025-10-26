function solution(arr) {
    let one = 0
    let zero = 0
    
    const isAllSame = (_arr,startRow,startCol,size) => {
        let target = _arr[startRow][startCol]
        
        for(let i=startRow;i<startRow+size;i++){
            for(let j=startCol;j<startCol+size;j++){
                if(_arr[i][j]!==target) return false
            }
        }
        
        return true
    }
    
    const comp = (_arr,startRow,startCol,size) => {
        if(size===1){
            one += _arr[startRow][startCol]===1?1:0
            zero += _arr[startRow][startCol]===0?1:0
            return
        }
        if(isAllSame(_arr,startRow,startCol,size)){
            one += _arr[startRow][startCol]===1?1:0
            zero += _arr[startRow][startCol]===0?1:0
            return
        }
        let nextSize = size/2
        comp(_arr,startRow,startCol,size/2)
        comp(_arr,startRow+nextSize,startCol,size/2)
        comp(_arr,startRow,startCol+nextSize,size/2)
        comp(_arr,startRow+nextSize,startCol+nextSize,size/2)
    }
    
    comp(arr,0,0,arr.length)
    
    
    return [zero,one];
}