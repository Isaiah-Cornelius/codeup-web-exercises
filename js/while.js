"use strict";
(function () {

    let x = 2;

    while (x <= 65536) {
        console.log(x);
        x = x * 2;
    }

    let conesToSell = Math.floor(Math.random() * 50) + 50;
    console.log(conesToSell);
    do {
        let conesSold = Math.floor(Math.random() * 5) + 1;

        if (conesToSell === 0) {
            console.log("Yay! I sold them all!");
            break;
        }
        console.log(conesToSell + " cones remaining!");
        if (conesToSell >= conesSold) {
            console.log(conesSold + " cones sold...");
            conesToSell = (conesToSell - conesSold);
            continue;
        } else if (conesToSell < conesSold) {
            console.log("I can't sell you " + conesSold + " cones! I only have " + conesToSell + " remaining!");
            continue;
        }
    } while (conesToSell >= 0);

})();