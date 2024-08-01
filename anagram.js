//Q3. Valid anagram or not..

// An ANAGRAM is a word or phase formed by rearranging the letters of a 
// diffrent word or phase using all original letters exactly once...

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:

// Input: s = "rat", t = "car"
// Output: false.

const isAnagram = function( s, t ) {
    if (s.length !== t.length){
        console.log(false);
    }
    s = s.split("").sort().join("");
    t = t.split("").sort().join("");
    
    return s===t;

}
let result = isAnagram("nagaram", "anagram");
console.log(result);



