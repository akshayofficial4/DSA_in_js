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

// another method using objects

const isAnagram = function (s, t) {
    if (s.length !== t.length) return false;
  
    let obj1 = {};
    let obj2 = {};
  
    for (let i = 0; i < s.length; i++) {
      obj1[s[i]] = (obj1[s[i]] || 0) + 1;
      obj2[t[i]] = (obj2[t[i]] || 0) + 1;
    }
  
    for (const key in obj1) {
      if (obj1[key] !== obj2[key]) return false;
    }
  
    return true;
  };
  
  console.log(isAnagram("anagram", "nagarm"));
  

