let lengthOfLongestSubstring = (str) => {
    const set =  new Set();
    const strLength = str.length;
    if (strLength === 0 && strLength === 1) {
        return strLength;
    }
    let rightPointer = - 1, result = 0;
    for (let i = 0; i < strLength; i++) {
        if (i !== 0) {
            set.delete(str.charAt(i - 1));
        }
        while (rightPointer + 1 < strLength && !set.has(str.charAt(rightPointer + 1))) {
            set.add(str.charAt(rightPointer + 1))
            rightPointer++
        }
        result = Math.max(result, rightPointer - i + 1);
    }
    return result;
}