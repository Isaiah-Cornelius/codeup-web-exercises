"use strict";
//// 9/21/22
//// Warmup #1: Area of a Triangle: Write a JavaScript function that accepts the 3 lengths of a triangle and outputs the triangle’s area.
// function areaOfATriangle(a,b,c){
//     //using Heron's formula. Semiperimeter = s = (a + b + c)/2
//     let s = (a + b + c) / 2;
//     let triangleArea = (s*(s-a)*(s-b)*(s-c))**(1/2);
//     console.log("The area of a triangle is : " + triangleArea);
//     return triangleArea;
// }
//// Warmup #2: Reverse a String: Write a JS function that accepts a string and returns the string in reverse. example input: codeup, example output: puedoc
// function reverseAString(x) {
//     if (typeof x !== 'string') {
//         return "Incorrect input type, please enter a string"
//     }
//     x = x.split("");
//     x = x.reverse();
//     x = x.join("");
//     return x;
// }
////FizzBuzz Activity: Print numbers 1-100. If # is divisible by 3 print Fizz. If # is divisible by 5 print Buzz. If # is divisible by both 3 and 5 print FizzBuzz
// for (let i = 1; i <= 100; i++){
//     if (i % 3 === 0 && i % 5 === 0){
//         console.log("FizzBuzz");
//     } else {
//         if (i % 3 === 0) {
//             console.log("Fizz");
//         } else {
//             if (i % 5 === 0) {
//                 console.log("Buzz")
//             } else {
//                 console.log(i);
//             }
//         }
//     }
// }
////Shuffle an array: Write a function to shuffle an array to a completely and entirely random order.
function shuffleArray(x){
    if (Array.isArray(x) !== true){
        return "Incorrect input type, please enter an array"
    }


}