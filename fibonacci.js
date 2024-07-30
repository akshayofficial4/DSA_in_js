// Ques 2 - Fibonacci Number
// Fibonacci Series -> 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233...
// The second number is the sum of preceding two values. These are Fibonacci Series...
// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1
// "n" is the position in the array..

// This program for printing the sequence...
const fib  = function(n) {
    const arr = [0 , 1];

    for(let i = 2; i <= n; i++){
        arr.push( arr[ i - 1 ] + arr[ i - 2 ] );
    }
    console.log(arr);
}
fib(5);

//This is for the particular value 

//const fib = (n) => n <= 1 ? n : fib( n - 1 ) + fib( n - 2 );
//console.log(fib(3));

// This is the one liner code using arrow function...



