class MinHeap {
  constructor() {
    this.heap = []
  }
  push(val) {
    this.heap.push(val)
    this._up()
  }
  pop() {
    if(this.heap.length===1) return this.heap.pop()
    const top = this.heap[0]
    this.heap[0] = this.heap.pop()
    this._down()
    return top
  }
  peek() { return this.heap[0] }
  size() { return this.heap.length }
  _up() {
    let i=this.heap.length-1
    while(i>0) {
      let p=Math.floor((i-1)/2)
      if(this.heap[p]<=this.heap[i]) break
      ;[this.heap[p],this.heap[i]]=[this.heap[i],this.heap[p]]
      i=p
    }
  }
  _down() {
    let i=0
    while(true) {
      let l=i*2+1, r=i*2+2, s=i
      if(l<this.heap.length && this.heap[l]<this.heap[s]) s=l
      if(r<this.heap.length && this.heap[r]<this.heap[s]) s=r
      if(s===i) break
      ;[this.heap[s],this.heap[i]]=[this.heap[i],this.heap[s]]
      i=s
    }
  }
}

function solution(scoville, K) {
  const heap=new MinHeap()
  scoville.forEach(v=>heap.push(v))
  let answer=0
  while(heap.size()>1 && heap.peek()<K) {
    const a=heap.pop()
    const b=heap.pop()
    heap.push(a+b*2)
    answer++
  }
  return heap.peek()>=K?answer:-1
}
