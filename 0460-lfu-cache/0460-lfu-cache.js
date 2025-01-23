/**
 * @param {number} capacity
 */
var LFUCache = function (capacity) {
  this.capacity = capacity
  this.cache = new Map() // {[key]:{freq,value}}
  this.freqMap = new Map() // {[1]:{[key,value],[key,value]}}
  this.minFreq = 0;
};

/** 
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function (key) {
  if (!this.cache.has(key)) return -1
  let { freq, value } = this.cache.get(key)

  if (!this.freqMap.has(freq + 1)) {
    this.freqMap.set(freq + 1, new Map());
  }

  this.freqMap.get(freq).delete(key)
  if (this.freqMap.get(freq).size === 0) {
    if (freq === this.minFreq) {
      this.minFreq++;
    }
  }

  this.freqMap.get(freq + 1).set(key, value)
  this.cache.set(key, { freq: freq + 1, value })

  return value
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function (key, value) {
  if (this.capacity === 0) return;

  if (this.cache.has(key)) {
    let { freq } = this.cache.get(key)

    if (!this.freqMap.has(freq + 1)) {
      this.freqMap.set(freq + 1, new Map());
    }

    this.freqMap.get(freq).delete(key)
    if (this.freqMap.get(freq).size === 0) {
      if (freq === this.minFreq) {
        this.minFreq++;
      }
    }

    this.freqMap.get(freq + 1).set(key, value)
    this.cache.set(key, { freq: freq + 1, value: value })
    return
  }

  if (this.capacity === this.cache.size) {
    let lruMap = this.freqMap.get(this.minFreq);
    let lruKey = lruMap.keys().next().value;

    this.cache.delete(lruKey);
    lruMap.delete(lruKey);
  }

  this.cache.set(key, { freq: 1, value })
  if (!this.freqMap.has(1)) {
    this.freqMap.set(1, new Map());
  }
  this.freqMap.get(1).set(key, value)
  this.minFreq = 1;
};

/** 
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */