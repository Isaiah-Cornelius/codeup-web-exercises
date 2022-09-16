"use strict";
//Prompt a user for an odd number between 1 and 50; use a loop and a break to continue prompting if an invalid input is entered
//Console.log all odd numbers between 1 and 50; skip the users number.

// getUserNumber();
//
// function getUserNumber() {
//     let userNumber = 0;
//     do {
//         userNumber = Number(prompt("Please enter your least favorite odd number between 1 and 50"));
//         if (userNumber % 2 === 1 && userNumber > 1 && userNumber < 50) {
//             console.log("Number to skip is: " + userNumber);
//             for (let i = 0; i < 50; i++) {
//                 if (i % 2 === 0) {
//                 } else if (i === userNumber) {
//                     console.log("Yikes! Skipping number: " + userNumber)
//                 } else {
//                     console.log("Here is an odd number: " + i);
//                 }
//             }
//         }
//     }
//     while (userNumber % 2 === 0 || userNumber <= 1 || userNumber >= 50);
// }
let userNumber = 0;
do {
    userNumber = Number(prompt("Please enter your least favorite odd number between 1 and 50"));
    if(userNumber % 2 === 1 && userNumber > 1 && userNumber < 50){
        break;
    }
} while (true);
console.log("Number to skip is: " + userNumber);

for(let i = 0; i <50; i++){
    if(i % 2 === 0){
        continue;
    }
    if(i === userNumber){
        console.log("Yikes! Skipping number: " + userNumber)
        continue;
    }
    console.log("Here is an odd number: " + i);
}