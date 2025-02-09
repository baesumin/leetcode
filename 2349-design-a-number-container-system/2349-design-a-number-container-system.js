
var NumberContainers = function () {
  this.numberMap = new Map() //key:number
  this.indexMap = new Map() //key:index
};

/** 
 * @param {number} index 
 * @param {number} number
 * @return {void}
 */

NumberContainers.prototype.change = function (index, number) {
    // 기존 인덱스에 값이 있는 경우 처리
    if (this.indexMap.has(index)) {
        const oldNumber = this.indexMap.get(index);
        const oldArr = this.numberMap.get(oldNumber);
        const idx = oldArr.indexOf(index);
        oldArr.splice(idx, 1);
        // 배열이 비어있으면 삭제
        if (oldArr.length === 0) {
            this.numberMap.delete(oldNumber);
        }
    }

    // 새로운 값 추가
    this.indexMap.set(index, number);
    if (!this.numberMap.has(number)) {
        this.numberMap.set(number, []);
    }
    
    // 정렬된 상태를 유지하며 삽입
    const arr = this.numberMap.get(number);
    let insertIdx = arr.findIndex(x => x > index);
    if (insertIdx === -1) {
        arr.push(index);
    } else {
        arr.splice(insertIdx, 0, index);
    }
};

NumberContainers.prototype.find = function (number) {
    if (!this.numberMap.has(number) || this.numberMap.get(number).length === 0) {
        return -1;
    }
    
    // 정렬된 배열의 첫 번째 요소가 최소값
    return this.numberMap.get(number)[0];
};

/** 
 * Your NumberContainers object will be instantiated and called as such:
 * var obj = new NumberContainers()
 * obj.change(index,number)
 * var param_2 = obj.find(number)
 */