//Q1 : check the number is palindrome or not...?

// An integer is said to be palindrome when it reads the same forward and backward...

//Eg : 121 -> true;

//   : 40 -> false;

const isPalindrome = function(num) {
    return num < 0 ? false : num === +num.toString().split("").reverse().join(""); 
}

let result = isPalindrome(121);
console.log(result);

    //first it checks the number is < 0 ,
    //if the condition doesn't satisfied then it moves to the else part.
    //there it changes the number to string because the we split the string, then reverse, 
    //then join the string and check the condition...
