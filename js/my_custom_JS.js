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
                continue;
        }
    }
    return string;
}

$(h1Elements).click(function (){
    $(this).css('backgroundColor', createRandomHexValue)
})

});
