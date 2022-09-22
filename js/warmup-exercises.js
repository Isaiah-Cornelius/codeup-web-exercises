"use strict";
//// 9/22/22
//// Warmup #1: Create a function to sort the array from lowest to highest. Make sure the function accepts an array and returns an array.
function sortArray(x){
    if (Array.isArray(x) !== true){
        return "Incorrect data type, please enter an array"
    }
    return x.sort();
}

//// Warmup #2: Write a function that returns the reading status of each of the following books:
function bookReadingStatus(){
    let array = [];
    library.forEach(function(book){
        console.log("Title: " + book.title + ". Reading Status: " + book.readingStatus);
        array.push(book.readingStatus);
    })
    return array;
}
let library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
    }];
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



// function shuffleArray(x) {
//     if (Array.isArray(x) !== true) {
//         return "Incorrect input type, please enter an array"
//     } else {
//         let shuffledArray = [];
//         while (x.length > 0) {
//             let randomIndex = Math.floor(Math.random() * (x.length - 1));
//             shuffledArray.push(x.splice(randomIndex, 1));
//         }
//         let concatShuffledArray = [].concat.apply([], shuffledArray);
//         x = concatShuffledArray;
//     }
//         return x;
// }
//         for (let i = 0; i < x.length; i){
//             let shuffledArray = [];
//             let randomIndex = Math.floor(Math.random()*(0, x.length-1));
//             console.log("random index is " + randomIndex);
//             shuffledArray.push(x.splice(randomIndex, randomIndex));
//             if (x.length === 0){
//                 console.log("Shuffling!");
//                 console.log(shuffledArray);
//                 x = shuffledArray;
//                 return x;
//             }
//         }
//     }
// }
// let array = [1,2,3,4,5];
// console.log(array);
//Try again bud....
//         for (let i = Math.floor(Math.random(0, x.length -1)); x.length > 0;){
//             let shuffledArray = [];
//             shuffledArray.push(x.splice(i,1));
//             if (x.length === 0){
//                 x = shuffledArray;
//                 console.log(x);
//                 return x;
//             }
//         }
//     }
// }