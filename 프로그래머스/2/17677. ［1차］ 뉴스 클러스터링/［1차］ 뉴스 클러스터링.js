function solution(str1, str2) {
    str1=str1.toUpperCase()
    str2=str2.toUpperCase()
    arr1=[]
    arr2=[]
    
    for(let i=0;i<str1.length-1;i++){
        if(/^[A-Za-z]{2}$/.test(str1[i]+str1[i+1])){
            arr1.push(str1[i]+str1[i+1])
        }
    }
    
    for(let i=0;i<str2.length-1;i++){
        if(/^[A-Za-z]{2}$/.test(str2[i]+str2[i+1])){
            arr2.push(str2[i]+str2[i+1])
        }
    }
    
    if(arr1.length===0&&arr2.length===0)return 65536
    
    const count = arr => arr.reduce((m, v) => (m.set(v, (m.get(v) || 0) + 1), m), new Map());

    const multisetIntersection = (A, B) => {
      const cb = count(B), res = [];
      for (const x of A) {
        const c = cb.get(x) || 0;
        if (c) { res.push(x); cb.set(x, c - 1); }
      }
      return res.length;
    };

    const multisetUnion = (A, B) => {
      const ca = count(A), cb = count(B), res = [];
      for (const x of new Set([...A, ...B])) {
        const k = Math.max(ca.get(x) || 0, cb.get(x) || 0);
        for (let i = 0; i < k; i++) res.push(x);
      }
      return res.length;
    };
    
    return Math.floor((multisetIntersection(arr1,arr2)/multisetUnion(arr1,arr2))*65536)
}