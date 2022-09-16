"use strict";


//For Loops Exercise

//Question #2
function showMultiplicationTable(x){
    for(let i = 1; i <= 10; i++){
        console.log(x + " x " + i + " = " + (x*i));
    }
}

//Question #3
function tenRandomNumbersOddOrEven(){
    for(let i = 0; i<10; i++){
        function getRandomInt(min, max){
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min) + min);
        }
        let randomNumber = getRandomInt(20,99);
        if(randomNumber % 2 === 0){
            console.log(randomNumber + " is even.");
        } else {
            console.log(randomNumber + " is odd.");
        }
        continue;
    }
}

//For Loop Question #4
let string = "";
for(let i=1; i < 10; i++){
    for(let x=1; x<=i; x++){
        string+=i;
    }
    string+="\n";
}
console.log(string);








































