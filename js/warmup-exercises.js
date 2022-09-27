"use strict";

//// 9/27/22
// /**
// There are 100 lockers that line the main hallway of Chelm High School.
//  Every night, the school principal makes sure all the lockers are closed so that there will be an orderly start to the next day.
//  One day, 100 mischievous students decide that they will play a prank.
//  The students all meet before school starts and line up.
//  The first student then walks down the hallway, and opens every locker.
//  The next student follows by closing every other locker (starting at the second locker).
//  Student 3 then goes to every third locker (starting with the third) and opens it if it’s closed, and closes it if it’s open.
//  Student 4 follows by opening every fourth locker if it’s closed and closing it if it’s open.
//  This goes on and on until Student 100 finally goes to the hundredth locker.
//  When the principal arrives later in the morning, which lockers does she find open?
//  */
// let lockers = Array(100).fill(false);
//
// function factors(num){
//     if (num <= Infinity && (typeof num === 'string' || typeof num === 'number')){
//         let numFactors = []
//         for (let i = 1; i <= num; i++){
//             if (num % i === 0){
//                 numFactors.push(i);
//             }
//         }
//         return numFactors.length;
//     }
//     return "Invalid argument; please enter a number or numeric string"
// }
//
// function lockersPrank(arr){
//     if (Array.isArray(arr)){
//         let openLockers = [];
//         arr.forEach(function (element, index){
//             if (factors(index+1)%2===1){
//                 openLockers.push(index + 1)
//             }
//         })
//         return "Open lockers are : " + openLockers;
//     }
//     return "Invalid argument; please enter an array"
// }
//
// let lockersAreOpen = Array(100).fill(false)
// function oneHundredLockersPrank(x){
//     if (Array.isArray(x) === true){
//         let openLockers = [];
//         for(let i = 1; i <= x.length; i++){
//             x.forEach(function (element, index){
//                 if ((index + 1) % i === 0){
//                     x[index] = !element;
//                 }
//             })
//         }
//         for(let z = 0; z<x.length; z++){
//             if(x[z] === true){
//                 openLockers.push(z + 1);
//             }
//         }
//         console.log("Open lockers are : " + openLockers);
//         return x;
//
//     }
//     return "Invalid argument; please enter the array you wish to prank."
// }
//// 9/26/22
// Write a function that takes an array of objects and a string as arguments. Add a property with key ‘continent’ and value equal to the string to each of the objects. Return the new array of objects. Don’t mutate the original array.
// example input: [{ city: 'Tokyo', country: 'Japan' }, { city: 'Bangkok', country: 'Thailand' }], 'Asia'
// expected output: [{ city: 'Tokyo', country: 'Japan', continent: 'Asia' }, { city: 'Bangkok', country: 'Thailand', continent: 'Asia' }]
// function returnArrayOfObjectsWithContinent(x,y){
//     if (Array.isArray(x)){
//         if(typeof y === 'string'){
//             x.forEach(function (element){
//                 element.continent = y
//             })
//             return x;
//         } return "Invalid input; please enter the continent as a string as the second argument"
//     } return "Invalid input; please enter an array as the first argument"
// }
//
// Write a function to return an array of only the Even numbers from an array with the numbers 1 through 10
// example input: [1,2,3,4,5] expected output: [2,4]
//
// function returnOnlyEven(x){
//     if (Array.isArray(x)){
//         let newArray = [];
//         x.forEach(function(element){
//             if (element % 2 === 0){
//                 newArray.push(element);
//             }
//         })
//         return newArray;
//     } return "Invalid input; please enter an array"
// }


//// 9/24/22
// /**
//  * Randomize an array in-place using an algorithm (Modified Durstenfeld Algoritm)
//  */
// function shuffleArray(array){
//     //create a blank array to push to when the loop index and the random index are the same; no shuffle
//     let noChangeIndex = [];
//     console.log("Original array is : " + array);
//     //this for loop will shuffle the entire array twice per index; once from the back forward and once from the front backwards
//     for (let i = array.length -1, a = 0; i > -1; i--, a++ ){
//         // console.log("i = :" + i);
//         let j = Math.floor(Math.random() * (array.length));
//         // console.log("j = :" + j);
//         // console.log("a = :" + a);
//         let b = Math.floor(Math.random() * (array.length));
//         // console.log("b = :" + b);
//         let temp = array[i];
//         array[i] = array[j];
//         array[j] = temp;
//         let temp2 = array[a];
//         array[a] = array[b];
//         array[b] = temp2;
//         // console.log("-----")
//         //the following two conditional statements push to the noChangeIndex array when a shuffle fails; meaning the used index and the random index are the same and nothing actually changed within the array
//         if (i === j){
//                     noChangeIndex.push("j is i for [" + i + "]");
//         }
//         if (a === b){
//             noChangeIndex.push("a is b for [" + a + "]");
//         }
//     }
//     console.log("No change on index : " + noChangeIndex);
//     console.log(((((array.length * 2) - noChangeIndex.length) / (array.length * 2)) * 100).toFixed(2)+ "% actual shuffle");
//     console.log(noChangeIndex.length + " Matching shuffles");
//     console.log(((array.length * 2) - noChangeIndex.length) + " properly shuffled index actions out of " + (array.length *2) + " trys.");
//     return array;
// }
// let array = [1,2,3,4,5,6];

//// 9/23/22
/* Randomize array in-place using Durstenfeld shuffle algorithm */
// function shuffleArray(array) {
//     for (var i = array.length - 1; i > 0; i--) {
//         console.log("var i is :" + i);
//         var j = Math.floor(Math.random() * (array.length));
//         console.log("var j = Math.floor(Math.random() * (i + 1))---var j is :" + j);
//         var temp = array[i];
//         console.log("var temp = array[i]---var temp is :" + temp);
//         array[i] = array[j];
//         console.log("array[i] = array[j]---var[i] is :" + array[i]);
//         array[j] = temp;
//         console.log("array[j] = temp---array[j] is :" + array[j]);
//         console.log("-----");
//     } return array;
// }
//// 9/22/22
//// Warmup #1: Create a function to sort the array from lowest to highest. Make sure the function accepts an array and returns an array.
// function sortArray(x){
//     if (Array.isArray(x) !== true){
//         return "Incorrect data type, please enter an array"
//     }
//     return x.sort();
// }
//
// //// Warmup #2: Write a function that returns the reading status of each of the following books:
// function bookReadingStatus(){
//     let array = [];
//     library.forEach(function(book){
//         console.log("Title: " + book.title + ". Reading Status: " + book.readingStatus);
//         array.push(book.title, book.readingStatus);
//     })
//     return array;
// }
// let library = [
//     {
//         author: 'Bill Gates',
//         title: 'The Road Ahead',
//         readingStatus: true
//     },
//     {
//         author: 'Steve Jobs',
//         title: 'Walter Isaacson',
//         readingStatus: true
//     },
//     {
//         author: 'Suzanne Collins',
//         title:  'Mockingjay: The Final Book of The Hunger Games',
//         readingStatus: false
//     }];
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