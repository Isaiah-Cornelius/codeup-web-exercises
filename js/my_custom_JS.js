$(function (){
let h1Elements = $('h1')
$(h1Elements).click(function (){
   let hex1 = Math.floor(Math.random() * 16);
   let hex2 = Math.floor(Math.random() * 16);
   let hex3 = Math.floor(Math.random() * 16);
   let hex4 = Math.floor(Math.random() * 16);
   let hex5 = Math.floor(Math.random() * 16);
   let hex6 = Math.floor(Math.random() * 16);
   let hexValue = [hex1, hex2, hex3, hex4, hex5, hex6];
   for (let i = 0; i < hexValue.length; i++){
       let string = '#';
       switch (hexValue[i]){
           case "10":
               hexValue[i]= 'A'
               string += hexValue[i]
               break;
           case "11":
               hexValue[i]= 'B'
               string += hexValue[i]
               break;
           case "12":
               hexValue[i]= 'C'
               string += hexValue[i]
               break;
           case "13":
               hexValue[i]= 'D'
               string += hexValue[i]
               break;
           case "14":
               hexValue[i]= 'E'
               string += hexValue[i]
               break;
           case "15":
               hexValue[i]= 'F'
               string += hexValue[i]
               break;
           default :
               string += hexValue[i]
               break;
       }
       return string;
   }
   $(this).css('backgroundColor', string)


})


























});
