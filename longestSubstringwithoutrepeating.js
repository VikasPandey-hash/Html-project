function longestSubstringWithoutRepeatingchars(str) {
    let maxLength = 0 ;
    let start = 0 ;
    const charMap = {} ;

    for(let i=0 ; i< str.length ; i++) {
        const char = str[i] ;
        if(charMap[char] >= start) {
            start = charMap[char] +1 ;
        }
        charMap[char] = 1 ;
        maxLength = Math.max(maxLength , i-start+1)
    }
    return maxLength ;
}

console.log(longestSubstringWithoutRepeatingchars("abcdacgvsg"))
console.log(longestSubstringWithoutRepeatingchars('pwwkew'))