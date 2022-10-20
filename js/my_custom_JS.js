$(function (){
let h1Elements = $('h1')

function createRandomHexValue() {
    let hex1 = Math.floor(Math.random() * 16);
    let hex2 = Math.floor(Math.random() * 16);
    let hex3 = Math.floor(Math.random() * 16);
    let hex4 = Math.floor(Math.random() * 16);
    let hex5 = Math.floor(Math.random() * 16);
    let hex6 = Math.floor(Math.random() * 16);
    let hexValue = [hex1, hex2, hex3, hex4, hex5, hex6];
    let string = '#';
    for (let i = 0; i < hexValue.length; i++) {
        switch (hexValue[i]) {
            case 10:
                hexValue[i] = 'A'
                string += hexValue[i]
                continue;
            case 11:
                hexValue[i] = 'B'
                string += hexValue[i]
                continue;
            case 12:
                hexValue[i] = 'C'
                string += hexValue[i]
                continue;
            case 13:
                hexValue[i] = 'D'
                string += hexValue[i]
                continue;
            case 14:
                hexValue[i] = 'E'
                string += hexValue[i]
                continue;
            case 15:
                hexValue[i] = 'F'
                string += hexValue[i]
                continue;
            default :
                string += hexValue[i]
        }
    }
    return string;
}

$(h1Elements).click(function (){
    $(this).css('backgroundColor', createRandomHexValue)
})



// function changePFontSize11px (){
//     pElements.css('font-size', '11px');
//     $(this).off(changePFontSize11px);
//     $(this).on(dblclick(changePFontSize18px));
// }
//
// function changePFontSize18px (){
//     pElements.css('font-size', '18px');
//     $(this).off(changePFontSize18px);
//     $(this).on(dblclick(changePFontSize25px));
// }
//
// function changePFontSize25px (){
//     pElements.css('font-size', '25px')
//     $(this).off(changePFontSize25px);
//     $(this).on(dblclick(changePFontSize11px));
// }
let pElements = $('p');

$(pElements).dblclick(changePFontSize);

let pClickCounter = 0;

function changePFontSize (){
    pClickCounter += 1;
    switch (pClickCounter % 3) {
        case 1 :
            pElements.css('font-size', '18px');
            break
        case 2 :
            pElements.css('font-size', '25px');
            break
        case 0 :
            pElements.css('font-size', '11px');
            pClickCounter = 0;
    }
    console.log(pClickCounter);
}

let liElements = $('li');

function liColorRed (){
    $(this).css('color', 'red')
}

function liColorBlack (){
    $(this).css('color', 'black')
}

$(liElements).hover(liColorRed,liColorBlack);



});
