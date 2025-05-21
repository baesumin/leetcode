var lengthOfLongestSubstring = function(s) {
    let result = 0;
    let charMap = new Map();
    let left = 0;
    
    for (let right = 0; right < s.length; right++) {
        const char = s[right];
        // 현재 문자가 이미 존재하고, 그 위치가 left 포인터보다 크거나 같은 경우
        if (charMap.has(char) && charMap.get(char) >= left) {
            left = charMap.get(char) + 1;
        }
        charMap.set(char, right);
        result = Math.max(result, right - left + 1);
    }
    
    return result;
};
